import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from '@codesandbox/sandpack-react'

import { SandpackContainer } from './Test.styles'

const code = `export default function App() {return <h1>Hello Sandpack</h1>}`

export const Test: React.FC = () => {
  return (
    <SandpackContainer>
      <SandpackProvider
        template='react'
        theme='dark'
        files={{
          '/App.js': code,
          '/button.js': code,
          '/a.js': code,
        }}
        options={{
          visibleFiles: ['/App.js', '/index.js', '/a.js'],
          activeFile: '/index.js',
        }}
      >
        <SandpackLayout>
          <SandpackCodeEditor
            closableTabs
            showLineNumbers
            showInlineErrors
            wrapContent
          />
          <SandpackPreview />
        </SandpackLayout>
      </SandpackProvider>
    </SandpackContainer>
  )
}
