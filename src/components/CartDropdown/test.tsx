import { screen, within } from '@testing-library/react'
import { render } from 'utils/tests'

import CartDropdown from '.'

import itemsMock from 'components/CartList/mock'

describe('<CartDropdown />', () => {
  it('should render <CartIcon /> and its badge', () => {
    render(<CartDropdown items={itemsMock} total="R$ 300,00" />)

    const parentElement = screen.getByLabelText(/shopping cart/i)
      .parentElement as HTMLElement

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(
      within(parentElement).getByText(`${itemsMock.length}`)
    ).toBeInTheDocument()
  })

  it('should render Dropdown content with cart items and total', () => {
    render(<CartDropdown items={itemsMock} total="R$ 300,00" />)

    expect(screen.getByText(/R\$ 300,00/i)).toBeInTheDocument()

    for (const item of itemsMock) {
      expect(screen.getByText(item.title)).toBeInTheDocument()
    }
  })
})
