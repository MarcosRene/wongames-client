import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'

import Games from '.'

import gamesMock from 'components/GameCardSlider/mock'
import filterItemsMock from 'components/ExploreSidebar/mock'

jest.mock('templates/Base', () => {
  // eslint-disable-next-line react/display-name
  return ({ children }: { children: React.ReactNode }) => {
    return <div data-testid="base">{children}</div>
  }
})

jest.mock('components/ExploreSidebar', () => {
  // eslint-disable-next-line react/display-name
  return ({ children }: { children: React.ReactNode }) => {
    return <div data-testid="explore-sidebar">{children}</div>
  }
})

jest.mock('components/GameCard', () => {
  // eslint-disable-next-line react/display-name
  return ({ children }: { children: React.ReactNode }) => {
    return <div data-testid="game-card">{children}</div>
  }
})

describe('<Games />', () => {
  it('should render sections', () => {
    renderWithTheme(
      <Games games={[gamesMock[0]]} filterItems={[filterItemsMock[0]]} />
    )

    expect(screen.getByTestId('explore-sidebar')).toBeInTheDocument()
    expect(screen.getByTestId('game-card')).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })
})
