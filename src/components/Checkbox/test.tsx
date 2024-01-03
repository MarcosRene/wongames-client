import { screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { render } from 'utils/tests'
import theme from 'styles/theme'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    render(<Checkbox label="Checkbox label" labelFor="checkbox" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()

    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()

    expect(screen.getByText(/checkbox label/i)).toHaveAttribute(
      'for',
      'checkbox'
    )
  })

  it('should render without label', () => {
    render(<Checkbox />)

    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    render(
      <Checkbox label="Checkbox label" labelFor="checkbox" labelColor="black" />
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()

    render(<Checkbox label="Checkbox label" onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()

    render(<Checkbox label="Checkbox label" onCheck={onCheck} isChecked />)

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith(false)
  })

  xit('should be accessibile with tab', () => {
    render(<Checkbox label="Checkbox label" labelFor="checkbox" />)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(screen.getByLabelText(/checkbox label/i)).toHaveFocus()
  })
})
