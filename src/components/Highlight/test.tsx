import { screen } from '@testing-library/react'
import { render } from 'utils/tests'

import * as S from './styles'

import Highlight from '.'

const highlightProps = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  backgroundImage: '/img/red-dead-img.jpg',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2'
}

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    const { container } = render(<Highlight {...highlightProps} />)

    expect(
      screen.getByRole('heading', { name: /heading 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /heading 2/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render background image', () => {
    const { container } = render(<Highlight {...highlightProps} />)

    expect(container.firstChild).toHaveStyle({
      backgroundColor: `url(${highlightProps['backgroundImage']})`
    })
  })

  it('should render float image', () => {
    render(<Highlight {...highlightProps} floatImage="/float-image.png" />)

    expect(
      screen.getByRole('img', {
        name: new RegExp(highlightProps['title'], 'i')
      })
    ).toHaveAttribute('src', '/float-image.png')
  })

  it('should render align right by default', () => {
    const { container } = render(
      <Highlight {...highlightProps} floatImage="/float-image.png" />
    )

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    })
  })

  it('should render align left by default', () => {
    const { container } = render(
      <Highlight {...highlightProps} alignment="left" />
    )

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`
    })
  })
})
