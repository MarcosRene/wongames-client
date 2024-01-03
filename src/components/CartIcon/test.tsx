import { screen, within } from '@testing-library/react'
import { render } from 'utils/tests'

import CartIcon from '.'

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    render(<CartIcon />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it('should render with badge', () => {
    render(<CartIcon quantity={12} />)

    const parentElement = screen.getByLabelText(/shopping cart/i)
      .parentElement as HTMLElement

    expect(within(parentElement).getByText(12)).toBeInTheDocument()
  })

  it('should render with badge only if has positive numbers', () => {
    render(<CartIcon quantity={-1} />)

    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/-1/)).not.toBeInTheDocument()
  })
})
