import { screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/tests'
import theme from '../../styles/theme'

import Heading from '.'

describe('<Heading />', () => {
  it('should render by default white color', () => {
    renderWithTheme(<Heading>Most Populars</Heading>)

    expect(screen.getByRole('heading', { name: /most populars/i })).toHaveStyle(
      {
        color: theme.colors.white
      }
    )
  })

  it('should render a heading black color', () => {
    renderWithTheme(<Heading color="black">Most Populars</Heading>)

    expect(screen.getByRole('heading', { name: /most populars/i })).toHaveStyle(
      {
        color: theme.colors.black
      }
    )
  })

  it('should render a heading with a line to the left side', () => {
    renderWithTheme(
      <Heading color="black" lineLeft>
        Most Populars
      </Heading>
    )

    expect(screen.getByRole('heading', { name: /most populars/i })).toHaveStyle(
      {
        'border-left': `0.7rem solid ${theme.colors.primary}`
      }
    )
  })

  it('should render a heading with a line at the bottom', () => {
    renderWithTheme(
      <Heading color="black" lineBottom>
        Most Populars
      </Heading>
    )

    expect(
      screen.getByRole('heading', { name: /most populars/i })
    ).toHaveStyleRule('border-bottom', `0.5rem solid ${theme.colors.primary}`, {
      modifier: '::after'
    })
  })

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Most Populars</Heading>)

    expect(screen.getByRole('heading', { name: /most populars/i })).toHaveStyle(
      {
        'font-size': theme.font.sizes.medium
      }
    )
    expect(
      screen.getByRole('heading', { name: /most populars/i })
    ).toHaveStyleRule('width', '3rem', {
      modifier: '::after'
    })
  })

  it('should render a Heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.primary}`
    })
    expect(heading).toHaveStyleRule(
      'border-bottom',
      `0.5rem solid ${theme.colors.primary}`,
      {
        modifier: '::after'
      }
    )
  })

  it('should render a Heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.secondary}`
    })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    })
  })
})
