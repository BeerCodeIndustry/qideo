import { isLastIndex } from '@beercode/common-utils'
import { Folder, Node, Tree } from '@beercode/react-folder-tree'

export const getSemiPaths = (filePath: string): string[] => {
  return filePath.split('/').filter(n => n)
}

export const getPathByDeep = (semiPaths: string[], deep: number): string => {
  return semiPaths.slice(deep).join('/')
}

export const genSemiTree = (filePath: string): Node => {
  const semiPaths = getSemiPaths(filePath).reverse()

  return semiPaths.reduce<Node>(
    (acc: Node, semiPath, idx) => {
      if (idx === 0) return acc

      return {
        type: 'folder',
        name: semiPath,
        files: [acc],
      }
    },
    {
      name: semiPaths[0],
      type: 'file',
    },
  )
}

export const findFolder = (tree: Tree, name: string): Folder | undefined => {
  return tree.find(node => node.name === name && node.type === 'folder') as
    | Folder
    | undefined
}

export const parse = (tree: Tree, filepath: string): Tree => {
  const semiPaths = getSemiPaths(filepath)
  let deep = 0

  const changeSemi = (_tree?: Tree): void => {
    if (isLastIndex(semiPaths, deep) || !_tree?.length) {
      _tree?.push(genSemiTree(getPathByDeep(semiPaths, deep)))
    } else {
      const folder = findFolder(_tree, semiPaths[deep])

      if (folder) {
        deep += 1
        changeSemi(folder.files)
      } else {
        _tree.push(genSemiTree(getPathByDeep(semiPaths, deep)))
      }
    }
  }

  changeSemi(tree)

  return tree
}

export const genTree = (files: string[]): Tree => {
  return files.reduce((acc: Tree, vf) => [...parse(acc, vf)], [])
}
