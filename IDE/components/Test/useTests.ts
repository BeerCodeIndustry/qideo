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
      setTests(tests)
      iframe.current =
        document.getElementsByTagName('iframe')[0]?.contentWindow?.document

      const trigger = new Function(
        ...tests[testingStage].triggerArgs,
        tests[testingStage].trigger,
      )

      try {
        trigger(
          ...tests[testingStage].triggerArgs.map((id: string) => {
            return iframe.current?.getElementById(id)
          }),
        )
      } catch (e) {
        console.warn(e)
        notPassed()
      }

      setTestingState(
        tests[testingStage].state.reduce(
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
    },
    [testingStage],
  )

  useEffect(() => {
    if (!checking) {
      return
    }

    const checker = new Function(
      ...tests[testingStage].checkerArgs,
      tests[testingStage].checker,
    )

    const result = checker(
      ...tests[testingStage].checkerArgs.map((name: string) => {
        const state = tests[testingStage].state.find(
          (s: any) => s.name === name,
        )
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
