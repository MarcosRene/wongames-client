import { ImgHTMLAttributes } from 'react'
import { screen } from '@testing-library/react'

import { render } from 'utils/tests'

import GameItem from '.'

const ownerProps = {
  img: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00'
}

// jest.mock('next/image', () => ({
//   __esModule: true,
//   default: (props: ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />
// }))

jest.mock('next/image', () => {
  // eslint-disable-next-line react/display-name
  return (props: ImgHTMLAttributes<HTMLImageElement>) => {
    return <img {...props} />
  }
})

describe('<GameItem />', () => {
  it('should render the item', () => {
    render(<GameItem {...ownerProps} />)

    expect(
      screen.getByRole('heading', { name: ownerProps.title })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: ownerProps.title })).toHaveAttribute(
      'src',
      ownerProps.img
    )

    expect(screen.getByText(/R\$ 215,00/i)).toBeInTheDocument()
  })

  it('should render item with donwload link', () => {
    const downloadLink = 'http://link'

    render(<GameItem {...ownerProps} downloadLink={downloadLink} />)

    expect(
      screen.getByRole('link', { name: `Get ${ownerProps.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })

  it('should render the payment info', () => {
    const paymentInfo = {
      cartFlag: 'mastercard',
      img: '/img/master-card.png',
      cartNumber: '**** **** **** 4326',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    }

    render(<GameItem {...ownerProps} paymentInfo={paymentInfo} />)

    expect(
      screen.getByRole('img', { name: paymentInfo.cartFlag })
    ).toHaveAttribute('src', paymentInfo.img)

    expect(screen.getByText(paymentInfo.cartNumber)).toBeInTheDocument()

    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })
})
