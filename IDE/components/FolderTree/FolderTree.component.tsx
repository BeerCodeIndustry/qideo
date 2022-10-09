import { Color, Icon, IconFilename, IconSize } from '@beercode/common-frontend'
import { ChevronDown, ChevronRight } from '@beercode/common-icons'
import { cloneDeep, useToggle } from '@beercode/common-utils'
import { useMemo } from 'react'

import {
  Container,
  FolderContainer,
  NodeContainer,
  Row,
} from './FolderTree.styles'
import {
  File,
  Folder,
  FolderTreeProps,
  Node,
  NodeItem,
} from './FolderTree.types'

export const RenderFolder: React.FC<Folder> = ({ name, files }) => {
  const [isOpen, toggleOpen] = useToggle(false)

  return (
    <FolderContainer flexDirection='column'>
      <Row alignItems='center' onClick={() => toggleOpen()} gap={0.5}>
        <Icon color={Color.BLUE_300} size={IconSize.SM}>
          {isOpen ? <ChevronDown /> : <ChevronRight />}
        </Icon>
        {name}
      </Row>
      {isOpen && <RenderNode node={files} />}
    </FolderContainer>
  )
}

export const RenderFile: React.FC<File> = ({ name }) => {
  return (
    <Row>
      <IconFilename fullFilename={name} />
    </Row>
  )
}

export const RenderNode: React.FC<{ node?: Node }> = ({ node }) => {
  return (
    <NodeContainer flexDirection='column'>
      {node?.map(item => (
        <>
          {item.type === 'folder' && <RenderFolder {...item} />}
          {item.type === 'file' && <RenderFile {...item} />}
        </>
      ))}
    </NodeContainer>
  )
}

export const FolderTree: React.FC<FolderTreeProps> = ({ data }) => {
  const sortNode = (arr: Node): Node => {
    return cloneDeep(arr).sort((a: NodeItem, b: NodeItem) => {
      if (a.type === b.type) return 0

      if (a.type === 'folder') return -1

      if (b.type === 'folder') return 1

      return 0
    })
  }

  const reqSort = (arr: Node): Node => {
    return sortNode(arr).map(nodeItem => {
      if (nodeItem.type === 'folder' && nodeItem.files)
        return {
          ...nodeItem,
          files: reqSort(nodeItem.files),
        }

      return nodeItem
    })
  }

  const node = useMemo(() => reqSort(data), [data])

  return (
    <Container flexDirection='column'>
      <RenderNode node={node} />
    </Container>
  )
}
