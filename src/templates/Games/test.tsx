import { screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import userEvent from '@testing-library/user-event'
import apolloCache from 'services/apollo/apolloCache'
import { render } from 'utils/tests'

import { fetchMoreMock, mocks } from './mocks'

import Games from '.'

import filterItemsMock from 'components/ExploreSidebar/mock'

jest.mock('templates/Base', () => {
  // eslint-disable-next-line react/display-name
  return ({ children }: { children: React.ReactNode }) => {
    return <div data-testid="base">{children}</div>
  }
})

describe('<Games />', () => {
  it('should render sections', async () => {
    render(<Games filterItems={[filterItemsMock[0]]} />, {
      wrapper: ({ children }: { children: React.ReactNode }) => {
        return <MockedProvider mocks={mocks}>{children}</MockedProvider>
      }
    })

    expect(await screen.findByText(/succubus/i)).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })

  it('should render more games when show more is clicked', async () => {
    render(<Games filterItems={[filterItemsMock[0]]} />, {
      wrapper: ({ children }: { children: React.ReactNode }) => {
        return (
          <MockedProvider
            mocks={[...mocks, ...fetchMoreMock]}
            cache={apolloCache}
          >
            {children}
          </MockedProvider>
        )
      }
    })

    expect(await screen.findByText(/succubus/i)).toBeInTheDocument()

    userEvent.click(await screen.findByRole('button', { name: /show more/i }))

    expect(
      await screen.findByText('Cyberpunk 2077: Phantom Liberty')
    ).toBeInTheDocument()
  })
})
