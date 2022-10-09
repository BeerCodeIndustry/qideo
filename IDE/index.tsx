import { SandpackProvider } from '@codesandbox/sandpack-react'
import type { NextPage } from 'next'

import { Test } from './components/Test'
import { Container } from './styles'

const code = `export default function App() {return <h1>Hello Sandpack</h1>}`

export const IDE: NextPage = () => {
  const theme = 'dark'

  return (
    <Container>
      <SandpackProvider
        template='react'
        theme={theme}
        files={{
          'App.js': code,
          'button.js': code,
          'a.js': code,
          'folder/b.js': code,
        }}
        options={{
          visibleFiles: ['App.js', 'a.js', 'folder/b.js'],
          activeFile: 'a.js',
        }}
      >
        <Test />
      </SandpackProvider>
    </Container>
  )
}
