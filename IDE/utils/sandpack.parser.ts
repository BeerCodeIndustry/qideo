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

export const findFolder = (name: string, tree?: Tree): Folder | undefined => {
  return tree?.find(node => node.name === name && node.type === 'folder') as
    | Folder
    | undefined
}

export const parse = (tree: Tree, filepath: string): Tree => {
  const semiPaths = getSemiPaths(filepath)
  let deep = 0

  const changeSemiTreeFiles = (_tree?: Tree): void => {
    const folder = findFolder(semiPaths[deep], _tree)

    if (isLastIndex(semiPaths, deep) || !_tree?.length || !folder) {
      _tree?.push(genSemiTree(getPathByDeep(semiPaths, deep)))
    } else {
      deep += 1
      changeSemiTreeFiles(folder.files)
    }
  }

  changeSemiTreeFiles(tree)

  return tree
}

export const genTree = (files: string[]): Tree => {
  return files.reduce(
    (acc: Tree, filepath: string) => [...parse(acc, filepath)],
    [],
  )
}
