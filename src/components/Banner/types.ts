export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  ribbon?: React.ReactNode
  ribbonColor?: 'primary' | 'secondary'
  ribbonSize?: 'small' | 'normal'
}
