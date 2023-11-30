import { GameCardProps } from '../GameCard/types'
import { SliderSettings } from '../Slider/types'

export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: 'white' | 'black'
}

export type SliderSettingsProps = SliderSettings
