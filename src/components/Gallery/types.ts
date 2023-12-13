import { SliderSettings } from 'components/Slider/types'

export type GalleryImagemProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImagemProps[]
}

export type SliderSettingsProps = SliderSettings

export type StyleProps = {
  isOpen: boolean
}
