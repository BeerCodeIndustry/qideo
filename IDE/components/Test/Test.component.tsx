import { FolderTree } from '@beercode/react-folder-tree'
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  useSandpack,
} from '@codesandbox/sandpack-react'
import { useEffect, useMemo, useRef } from 'react'

import { genTree } from '../../utils/sandpack.parser'
import { Prettier } from '../Prettier'
import { SandpackContainer } from './Test.styles'
import { testResponse } from './mock'
import { useTests } from './useTests'

export const Test: React.FC = () => {
  const codemirrorInstance = useRef()
  const { sandpack } = useSandpack()
  const { initTests, testResult, fullReset } = useTests()
  const activeId = useMemo(() => sandpack.activeFile, [sandpack.activeFile])
  const visibleFiles = useMemo(
    () => sandpack.visibleFiles,
    [sandpack.visibleFiles],
  )

  useEffect(() => {
    if (testResult === null) {
      return
    }
    alert(testResult ? 'passed' : 'not passed')
    fullReset()
  }, [testResult])

  const tree = useMemo(() => genTree(visibleFiles), [visibleFiles])

  const onFileClick = (id: string): void => {
    sandpack.openFile(id)
  }

  return (
    <SandpackContainer>
      <SandpackLayout>
        <FolderTree
          tree={tree}
          onFileClick={onFileClick}
          theme='dark'
          activeId={activeId}
        />
        <SandpackCodeEditor showLineNumbers showInlineErrors wrapContent />
        <Prettier codemirrorInstance={codemirrorInstance} />
        <SandpackPreview
          actionsChildren={
            <button onClick={() => initTests(testResponse)}>Test code</button>
          }
        />
      </SandpackLayout>
    </SandpackContainer>
  )
}
