import { FolderTree } from '@beercode/react-folder-tree'
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  useSandpack,
} from '@codesandbox/sandpack-react'
import { useMemo } from 'react'

import { genTree } from '../../utils/sandpack.parser'
import { SandpackContainer } from './Test.styles'

export const Test: React.FC = () => {
  const { sandpack } = useSandpack()
  const activeId = useMemo(() => sandpack.activeFile, [sandpack.activeFile])
  const visibleFiles = useMemo(
    () => sandpack.visibleFiles,
    [sandpack.visibleFiles],
  )

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
        <SandpackPreview />
      </SandpackLayout>
    </SandpackContainer>
  )
}
