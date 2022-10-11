import { log } from '@beercode/common-utils'
import { useActiveCode, useSandpack } from '@codesandbox/sandpack-react'
import prettier from 'prettier'
import parserBabel from 'prettier/parser-babel'
import { useCallback, useEffect, useState } from 'react'

import { PrettierProps } from './Prettier.types'

export const Prettier: React.FC<PrettierProps> = ({ codemirrorInstance }) => {
  const [prettierCode, setPrettierCode] = useState<null | string>('')
  const { sandpack } = useSandpack()
  const activeCode = useActiveCode()

  const runPrettier = useCallback(() => {
    if (activeCode.code) {
      try {
        /**
         * I would recomend to run this process in a Worker
         */
        const formatted = prettier.format(activeCode.code, {
          parser: 'babel',
          plugins: [parserBabel],
          trailingComma: 'all',
          tabWidth: 2,
          semi: false,
          singleQuote: true,
          jsxSingleQuote: true,
          arrowParens: 'avoid',
        })

        setPrettierCode(formatted)
      } catch (e) {
        log(e)
      }
    }
  }, [activeCode.code])

  const bindCtrlS = (e: KeyboardEvent): void => {
    if (e.ctrlKey && e.key === 's') {
      // Prevent the Save dialog to open
      e.preventDefault()
      runPrettier()
      log('CTRL + S')
    }
  }

  /**
   * You need to find a proper trigger to run the Prettier,
   * for example in the VSCode is the save actions, and
   * I used a debounce on every change.
   */
  useEffect(() => {
    window.addEventListener('keydown', bindCtrlS)

    return () => {
      window.removeEventListener('keydown', bindCtrlS)
    }
  }, [])

  useEffect(() => {
    if (prettierCode) {
      const cmInstance = codemirrorInstance?.current?.getCodemirror()

      if (cmInstance) {
        const trans = cmInstance.state.update({
          selection: cmInstance.state.selection,
          changes: {
            from: 0,
            to: cmInstance.state.doc.length,
            insert: prettierCode,
          },
        })

        cmInstance.update([trans])
      }

      sandpack.updateFile(sandpack.activeFile, prettierCode)

      setPrettierCode(null)
    }
  }, [prettierCode])

  return null
}
