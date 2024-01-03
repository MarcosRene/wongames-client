import 'match-media-mock'
import { screen } from '@testing-library/react'
import { render } from 'utils/tests'

import Cart from '.'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import cartListMock from 'components/CartList/mock'
import optionsMock from 'components/PaymentOptions/mock'

const ownerProps = {
  cards: optionsMock,
  recommendedGames: gamesMock,
  recommendedHighlight: highlightMock,
  items: cartListMock,
  total: 'R$ 430,00'
}

jest.mock('templates/Base', () => {
  // eslint-disable-next-line react/display-name
  return ({ children }: { children: React.ReactNode }) => {
    return <div data-testid="base">{children}</div>
  }
})

jest.mock('components/Showcase', () => {
  // eslint-disable-next-line react/display-name
  return () => {
    return <div data-testid="showcase" />
  }
})

jest.mock('components/CartList', () => {
  // eslint-disable-next-line react/display-name
  return () => {
    return <div data-testid="cart-list" />
  }
})

jest.mock('components/PaymentOptions', () => {
  // eslint-disable-next-line react/display-name
  return () => {
    return <div data-testid="payment-options" />
  }
})

jest.mock('components/Empty', () => {
  // eslint-disable-next-line react/display-name
  return () => {
    return <div data-testid="empty" />
  }
})

describe('<Cart />', () => {
  it('should render the heading', () => {
    render(<Cart {...ownerProps} />)

    expect(
      screen.getByRole('heading', { name: /my cart/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId('cart-list')).toBeInTheDocument()
    expect(screen.getByTestId('payment-options')).toBeInTheDocument()
    expect(screen.getByTestId('showcase')).toBeInTheDocument()
    expect(screen.queryByTestId('empty')).not.toBeInTheDocument()
  })

  it('should render empty section if there are no items', () => {
    const { debug, container } = render(<Cart {...ownerProps} items={[]} />)

    debug(container)

    expect(screen.getByTestId('empty')).toBeInTheDocument()
  })
})
