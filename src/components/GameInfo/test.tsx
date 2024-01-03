import { screen } from '@testing-library/react'

import { render } from 'utils/tests'
import theme from 'styles/theme'

import GameInfo from '.'

const ownerProps = {
  title: 'My game title',
  description: 'Game description',
  price: 210
}

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    const { container } = render(<GameInfo {...ownerProps} />)

    expect(
      screen.getByRole('heading', { name: /my game title/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/210/i)).toBeInTheDocument()
    expect(screen.getByText(/game description/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the label "Free"', () => {
    render(<GameInfo {...ownerProps} price={0} />)

    const freeLabel = screen.getByText('Free')

    expect(freeLabel).toBeInTheDocument()
    expect(freeLabel).toHaveStyle({
      backgroundColor: theme.colors.secondary,
      color: theme.colors.white
    })
  })

  it('should render buttons', () => {
    render(<GameInfo {...ownerProps} />)

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
  })
})
