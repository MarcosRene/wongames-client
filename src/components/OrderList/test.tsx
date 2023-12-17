import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'

import OrderList from '.'

import itemsMock from './mock'

jest.mock('components/Empty', () => {
  // eslint-disable-next-line react/display-name
  return () => {
    return <div data-testid="empty" />
  }
})

jest.mock('components/GameItem', () => {
  // eslint-disable-next-line react/display-name
  return ({ children }: { children: React.ReactNode }) => {
    return <div data-testid="game-item">{children}</div>
  }
})

describe('<OrdersList />', () => {
  it('should render the game items', () => {
    renderWithTheme(<OrderList items={itemsMock} />)

    expect(
      screen.getByRole('heading', { name: /my orders/i })
    ).toBeInTheDocument()

    expect(screen.getAllByTestId('game-item')).toHaveLength(2)
  })

  it('should render empty state', () => {
    renderWithTheme(<OrderList />)

    expect(screen.getByTestId('empty')).toBeInTheDocument()
  })
})
