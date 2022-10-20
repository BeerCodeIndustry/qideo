import { useCallback, useEffect, useRef, useState } from 'react'

import { State, Tests } from './Test.types'

export const useTests = () => {
  const iframe = useRef<Document>()
  const [tests, setTests] = useState<Tests>([])
  const [testingState, setTestingState] = useState({})
  const [testingStage, setTestingStage] = useState(0)
  const [testResult, setTestResult] = useState<boolean | null>(null)
  const [checking, setChecking] = useState(false)

  const clean = useCallback(() => {
    setTestingState({})
    setTestingStage(0)
    setChecking(false)
    setTests([])
  }, [])

  const fullReset = useCallback(() => {
    clean()
    setTestResult(null)
  }, [])

  const notPassed = useCallback(() => {
    setTestResult(false)
    clean()
  }, [])

  const passed = useCallback(() => {
    setTestResult(true)
    clean()
  }, [])

  const initTests = useCallback(
    (tests: Tests) => {
      iframe.current =
        document.getElementsByTagName('iframe')[0]?.contentWindow?.document
      const test = tests[testingStage]

      setTests(tests)

      const trigger = new Function(...test.triggerArgs, test.trigger)

      try {
        trigger(
          ...test.triggerArgs.map((id: string) => {
            return iframe.current?.getElementById(id)
          }),
        )

        setTestingState(
          test.state.reduce(
            (acc: Record<string, unknown>, stateInstance: State) => {
              return {
                ...acc,
                [stateInstance.name]: iframe.current?.getElementById(
                  stateInstance.id,
                )?.[stateInstance.valuePath as keyof HTMLElement],
              }
            },
            {},
          ),
        )

        setTimeout(() => setChecking(true), 0)
      } catch (e) {
        console.warn(e)
        notPassed()
      }
    },
    [testingStage],
  )

  useEffect(() => {
    if (!checking) {
      return
    }

    const test = tests[testingStage]

    const checker = new Function(...test.checkerArgs, test.checker)

    const result = checker(
      ...test.checkerArgs.map((name: string) => {
        const state = test.state.find((state: State) => state.name === name)

        return {
          prev: testingState[name as keyof typeof testingState],
          next: iframe.current?.getElementById(state?.id || '')?.[
            (state?.valuePath || '') as keyof HTMLElement
          ],
        }
      }),
    )

    setChecking(false)

    if (!result) {
      notPassed()
      return
    }

    if (tests.length - 1 === testingStage) {
      passed()
    }
  }, [checking, testingStage, testingState, tests])

  return { initTests, testResult, fullReset }
}
