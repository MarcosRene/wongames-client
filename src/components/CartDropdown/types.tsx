import { GameItemProps } from 'components/GameItem/types'

export type CartDropdownProps = Partial<{
  items: GameItemProps[]
  total: string
}>
