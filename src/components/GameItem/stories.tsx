import { Meta, StoryObj } from '@storybook/react'
import GameItem from '.'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00'
  },
  parameters: {
    backgrounds: {
      default: 'won-light'
    }
  }
} as Meta<typeof GameItem>

export const Default: StoryObj<typeof GameItem> = {}

export const WithPayment: StoryObj<typeof GameItem> = {
  args: {
    downloadLink: 'https://wongames.com/game/download/21312ndasd',
    paymentInfo: {
      cartFlag: 'mastercard',
      img: '/img/mastercard.png',
      cartNumber: '**** **** **** 4326',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    }
  }
}
