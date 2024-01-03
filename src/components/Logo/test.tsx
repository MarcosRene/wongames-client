import { screen } from '@testing-library/react'

import { render } from 'utils/tests'
import theme from 'styles/theme'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the logo with id passed', () => {
    const { container } = render(<Logo id="myId" />)

    expect(container.querySelector('#paint_linear_myId')).toBeInTheDocument()
  })

  it('should render the label with the color white by default', () => {
    render(<Logo />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should render the label with black color', () => {
    render(<Logo color="black" />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should render by default the normal size', () => {
    render(<Logo />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render the large size', () => {
    render(<Logo size="large" />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render the large logo without text the hideOnMobile', () => {
    render(<Logo size="large" hideOnMobile />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)'
      }
    )
  })
})
