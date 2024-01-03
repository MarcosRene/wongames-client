import { screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { render } from 'utils/tests'

import { mocks } from './mocks'

import Games from '.'

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
    return <div data-testid="ExploreSidebar">{children}</div>
  }
})

jest.mock('components/GameCard', () => {
  // eslint-disable-next-line react/display-name
  return ({ children }: { children: React.ReactNode }) => {
    return <div data-testid="GameCard">{children}</div>
  }
})

describe('<Games />', () => {
  it('should render sections', async () => {
    render(<Games filterItems={[filterItemsMock[0]]} />, {
      wrapper: ({ children }: { children: React.ReactNode }) => {
        return (
          <MockedProvider mocks={mocks} addTypename={false}>
            {children}
          </MockedProvider>
        )
      }
    })

    expect(await screen.findByTestId('ExploreSidebar')).toBeInTheDocument()
    expect(await screen.findByTestId('GameCard')).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })
})
