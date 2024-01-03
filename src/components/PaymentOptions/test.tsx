import { screen, waitFor } from '@testing-library/react'
import { render } from 'utils/tests'

import PaymentOptions from '.'

import paymentOptionsMock from './mock'
import userEvent from '@testing-library/user-event'

describe('<PaymentOptions />', () => {
  it('should render the saved card options and the add new card button', () => {
    const handlePayment = jest.fn()

    render(
      <PaymentOptions
        cards={paymentOptionsMock}
        handlePayment={handlePayment}
      />
    )

    expect(
      screen.getByRole('heading', { name: /payment options/i })
    ).toBeInTheDocument()

    expect(screen.getByLabelText(/4325/)).toBeInTheDocument()
    expect(screen.getByLabelText(/4326/)).toBeInTheDocument()
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument()
  })

  it('should render select card when clicking on the label', async () => {
    const handlePayment = jest.fn()

    render(
      <PaymentOptions
        cards={paymentOptionsMock}
        handlePayment={handlePayment}
      />
    )

    userEvent.click(screen.getByLabelText(/4325/))

    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /4325/ })).toBeChecked()
    })
  })

  it('should not call handlePayment when button is disabled', () => {
    const handlePayment = jest.fn()

    render(
      <PaymentOptions
        cards={paymentOptionsMock}
        handlePayment={handlePayment}
      />
    )

    userEvent.click(screen.getByRole('button', { name: /buy now/i }))

    expect(handlePayment).not.toHaveBeenCalled()
  })

  it('should not call handlePayment when credit card selected', async () => {
    const handlePayment = jest.fn()

    render(
      <PaymentOptions
        cards={paymentOptionsMock}
        handlePayment={handlePayment}
      />
    )

    userEvent.click(screen.getByLabelText(/4325/))
    userEvent.click(screen.getByRole('button', { name: /buy now/i }))

    await waitFor(() => {
      expect(handlePayment).toHaveBeenCalled()
    })
  })
})
