import { screen } from '@testing-library/react'
import { render } from 'utils/tests'
import theme from 'styles/theme'

import TextContent from '.'

const ownerProps = {
  title: 'Description',
  content: `<h1>Content</h1>`
}

describe('<TextContent />', () => {
  it('should render the title and content', () => {
    render(<TextContent {...ownerProps} />)

    expect(
      screen.getByRole('heading', { name: /description/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /content/i })
    ).toBeInTheDocument()

    const wrapper = screen.getByRole('heading', {
      name: /description/i
    }).parentElement

    expect(wrapper).toHaveStyle({
      color: theme.colors.white
    })

    expect(wrapper).toHaveStyleRule('color', `${theme.colors.black}`, {
      media: '(min-width: 768px)'
    })
  })

  it('should render without title', () => {
    render(<TextContent content={ownerProps.content} />)

    expect(
      screen.queryByRole('heading', { name: /description/i })
    ).not.toBeInTheDocument()
  })
})
