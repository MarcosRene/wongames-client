import 'match-media-mock'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { css } from 'styled-components'
import { render } from 'utils/tests'

import ExploreSidebar from '.'

import { Overlay } from './styles'

import exploreMock from './mock'

describe('<ExploreSidebar />', () => {
  it('should render headings', () => {
    render(<ExploreSidebar items={exploreMock} onFilter={jest.fn()} />)

    for (const explore of exploreMock) {
      expect(
        screen.getByRole('heading', { name: explore.title })
      ).toBeInTheDocument()

      expect(screen.getAllByRole('heading')).toHaveLength(4)
    }
  })

  it('should render inputs', () => {
    render(<ExploreSidebar items={exploreMock} onFilter={jest.fn()} />)

    for (const explore of exploreMock) {
      if (explore.type === 'checkbox') {
        for (const field of explore.fields) {
          expect(
            screen.getByRole(explore.type, { name: field.label })
          ).toBeInTheDocument()
        }
      }

      if (explore.type === 'radio') {
        for (const field of explore.fields) {
          expect(
            screen.getByRole(explore.type, { name: field.label })
          ).toBeInTheDocument()
        }
      }
    }
  })

  it('should render the filter button', () => {
    render(<ExploreSidebar items={exploreMock} onFilter={jest.fn()} />)

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })

  it('should check initial values that are passed', () => {
    render(
      <ExploreSidebar
        items={exploreMock}
        initialValues={{ platforms: ['windows'], sort_by: 'low-to-high' }}
        onFilter={jest.fn()}
      />
    )

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()
    expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked()
  })

  it('should filter with initial values', async () => {
    const onFilter = jest.fn()

    render(
      <ExploreSidebar
        items={exploreMock}
        initialValues={{ platforms: ['windows'], sort_by: 'low-to-high' }}
        onFilter={onFilter}
      />
    )

    await waitFor(() => {
      userEvent.click(screen.getByRole('button', { name: /filter/i }))

      expect(onFilter).toHaveBeenCalledWith({
        platforms: ['windows'],
        sort_by: 'low-to-high'
      })
    })
  })

  it('should filter with checked values', async () => {
    const onFilter = jest.fn()

    render(
      <ExploreSidebar
        items={exploreMock}
        initialValues={{ platforms: ['windows'], sort_by: 'low-to-high' }}
        onFilter={onFilter}
      />
    )

    await waitFor(() => {
      userEvent.click(screen.getByLabelText(/windows/i))
      userEvent.click(screen.getByLabelText(/low to high/i))

      userEvent.click(screen.getByRole('button', { name: /filter/i }))

      expect(onFilter).toHaveBeenCalledTimes(4)

      expect(onFilter).toHaveBeenCalledWith({
        platforms: ['windows'],
        sort_by: 'low-to-high'
      })
    })
  })

  it('should altern between radio options', async () => {
    const onFilter = jest.fn()

    render(<ExploreSidebar items={exploreMock} onFilter={onFilter} />)

    await waitFor(() => {
      userEvent.click(screen.getByLabelText(/low to high/i))
      userEvent.click(screen.getByLabelText(/high to low/i))

      expect(onFilter).toHaveBeenCalledWith({ sort_by: 'high-to-low' })
    })
  })

  xit('should open/close sidebar when filtering on mobile ', () => {
    const { container } = render(
      <ExploreSidebar items={exploreMock} onFilter={jest.fn} />
    )

    const variant = {
      media: '(max-width:768px)',
      modifier: String(css`
        ${Overlay}
      `)
    }

    const Element = container.firstChild

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)

    userEvent.click(screen.getByLabelText(/open filters/))

    expect(Element).toHaveStyleRule('opacity', '1', variant)

    userEvent.click(screen.getByLabelText(/close filters/))

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)

    userEvent.click(screen.getByLabelText(/open filters/))

    userEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)
  })
})
