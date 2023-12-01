import { screen, fireEvent } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'
import theme from '../../styles/theme'

import GameCard from '.'

const gameCardProps = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<GameCard {...gameCardProps} />)

    expect(
      screen.getByRole('heading', { name: gameCardProps['title'] })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: gameCardProps['developer'] })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: gameCardProps['title'] })
    ).toHaveAttribute('src', gameCardProps['img'])

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...gameCardProps} />)

    const price = screen.getByText('R$ 235,00')

    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard {...gameCardProps} promotionalPrice="R$ 15,00" />)

    expect(screen.getByText('R$ 235,00')).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...gameCardProps} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...gameCardProps} favorite onFav={onFav} />)

    const button = screen.getAllByRole('button')[0]

    fireEvent.click(button)

    expect(onFav).toHaveBeenCalled()
  })

  it('should render Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...gameCardProps}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )
    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toHaveStyle({ backgroundColor: theme.colors.secondary })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
    expect(ribbon).toBeInTheDocument()
  })
})
