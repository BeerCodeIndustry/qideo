import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  useSandpack,
} from '@codesandbox/sandpack-react'
import { useMemo, useState } from 'react'

import { data } from '../../constants/files'
import { FolderTree } from '../FolderTree'
import { SandpackContainer } from './Test.styles'

export const Test: React.FC = () => {
  const { sandpack } = useSandpack()
  const activeId = useMemo(() => sandpack.activeFile, [sandpack.activeFile])
  const [tree] = useState(data)

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
        <SandpackCodeEditor
          closableTabs
          showLineNumbers
          showInlineErrors
          wrapContent
        />
        <SandpackPreview />
      </SandpackLayout>
    </SandpackContainer>
  )
}
