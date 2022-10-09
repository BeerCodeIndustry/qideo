import type { NextPage } from 'next'

import { FolderTree } from './components/FolderTree'
import { Test } from './components/Test'
import { Container } from './styles'

export const IDE: NextPage = () => {
  return (
    <Container>
      <FolderTree
        data={[
          {
            type: 'file',
            name: '3.ts',
          },
          {
            type: 'folder',
            name: '1',
            files: [
              {
                type: 'file',
                name: 'file_1.tsx',
              },
              {
                type: 'folder',
                name: 'folder_1',
                files: [
                  {
                    type: 'file',
                    name: 'file_1.ts',
                  },
                  {
                    type: 'folder',
                    name: 'folder_1',
                    files: [
                      {
                        type: 'file',
                        name: 'file_1.js',
                      },
                      {
                        type: 'folder',
                        name: 'folder_1',
                        files: [
                          {
                            type: 'file',
                            name: 'file_1.json',
                          },
                          {
                            type: 'folder',
                            name: 'folder_1',
                            files: [
                              {
                                type: 'file',
                                name: 'file_1.jsx',
                              },
                              {
                                type: 'folder',
                                name: 'folder_1',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'file',
            name: '3',
          },
          {
            type: 'folder',
            name: '2',
          },
        ]}
      />
      <Test />
    </Container>
  )
}
