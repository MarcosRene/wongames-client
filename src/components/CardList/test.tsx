import { screen } from '@testing-library/react'
import { render } from 'utils/tests'

import cardsMock from 'components/PaymentOptions/mock'

import CardList from '.'

describe('<CardList />', () => {
  it('should render the cards list', () => {
    render(<CardList cards={cardsMock} />)

    expect(
      screen.getByRole('heading', { name: /my cards/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
      'src',
      '/img/visa.png'
    )

    expect(screen.getByRole('img', { name: /mastercard/i })).toHaveAttribute(
      'src',
      '/img/mastercard.png'
    )

    expect(screen.getByText(/4325/)).toBeInTheDocument()
    expect(screen.getByText(/4326/)).toBeInTheDocument()
  })
})
