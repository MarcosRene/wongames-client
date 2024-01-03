export type GameCardProps = {
  slug: string | undefined | null
  title: string | undefined
  developer: string | undefined
  img: string
  price: number | undefined
  promotionalPrice?: number
  favorite?: boolean
  onFav?: () => void
  ribbon?: React.ReactNode
  ribbonColor?: 'primary' | 'secondary'
  ribbonSize?: 'small' | 'normal'
}
