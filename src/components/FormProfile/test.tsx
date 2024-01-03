import { screen } from '@testing-library/react'
import { render } from 'utils/tests'

import FormProfile from '.'

describe('<FormProfile />', () => {
  it('should render the heading', () => {
    render(<FormProfile />)

    expect(
      screen.getByRole('heading', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /e-mail/i })).toBeInTheDocument()

    expect(
      screen.getByPlaceholderText(/type your password/i)
    ).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /Save/i })).toBeInTheDocument()
  })
})
