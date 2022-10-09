export interface FolderTreeProps {
  data: Node
}

export type Node = NodeItem[]

export type NodeItem = Folder | File

export interface Folder {
  type: 'folder'
  name: string
  files?: Node
}

export interface File {
  type: 'file'
  name: string
}
