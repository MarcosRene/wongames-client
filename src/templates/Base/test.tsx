import { screen } from '@testing-library/react'
import { render } from 'utils/tests'

import Base from '.'

jest.mock('components/Menu', () => {
  return () => {
    return 'render Menu component'
  }
})

jest.mock('components/Footer', () => {
  return () => {
    return 'render Footer component'
  }
})

describe('<Base />', () => {
  it('should render menu, footer and children', () => {
    render(
      <Base>
        <h1>Heading</h1>
      </Base>
    )

    expect(screen.getByText(/render menu component/i)).toBeInTheDocument()
    expect(screen.getByText(/render footer component/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument()
  })
})
