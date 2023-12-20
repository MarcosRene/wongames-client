import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme, renderUserEvent } from 'utils/tests'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropdown username="John Doe" />)

    expect(screen.getByText(/john doe/i)).toBeInTheDocument()
  })

  it('should render the menu', async () => {
    const { user } = renderUserEvent(<UserDropdown username="John Doe" />)

    user.click(screen.getByText(/john doe/i))

    await waitFor(() => {
      expect(
        screen.getByRole('link', { name: /my profile/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('link', { name: /wishlist/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('link', { name: /sign out/i })
      ).toBeInTheDocument()
    })
  })
})
