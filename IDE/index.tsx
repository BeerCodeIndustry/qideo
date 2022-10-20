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
          'a.js': code,
          'folder/a.js': code,
          'folder/b.js': code,
          'folder/A/a.js': code,
          'folder/A/b.js': code,
          'folder/A/B/a.js': code,
          'folder/A/B/b.js': code,
          'folder/A/B/C/a.js': code,
          'folder/A/B/C/b.js': code,
        }}
        options={{
          visibleFiles: [
            'App.js',
            'a.js',
            'folder/a.js',
            'folder/b.js',
            'folder/A/a.js',
            'folder/A/b.js',
            'folder/A/B/a.js',
            'folder/A/B/b.js',
            'folder/A/B/C/a.js',
            'folder/A/B/C/b.js',
          ],
          bundlerURL: 'http://localhost:3000/index.html',
          activeFile: 'a.js',
        }}
      >
        <Test />
      </SandpackProvider>
    </Container>
  )
}
