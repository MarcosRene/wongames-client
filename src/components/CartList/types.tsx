import { GameItemProps } from 'components/GameItem/types'

export type CartListProps = Partial<{
  items: GameItemProps[]
  total: string
  hasButton: boolean
}>
