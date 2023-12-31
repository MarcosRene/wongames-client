import { screen } from '@testing-library/react'
import { render } from 'utils/tests'
import theme from 'styles/theme'

import CartList from '.'

import cartListMock from './mock'

describe('<CartList />', () => {
  it('should render the cart list ', () => {
    const { container } = render(
      <CartList items={cartListMock} total="R$ 330,00" />
    )

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText(/R\$ 330,00/i)).toBeInTheDocument()
    expect(screen.getByText(/R\$ 330,00/i)).toHaveStyle({
      color: theme.colors.primary
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button', () => {
    render(<CartList items={cartListMock} total="R$ 330,00" hasButton />)

    expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
  })

  it('should render empty if there are no games', () => {
    render(<CartList />)

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument()
  })
})
