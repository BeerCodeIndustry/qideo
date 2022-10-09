import { Tree } from '../components/FolderTree'

export const data: Tree = [
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
]
