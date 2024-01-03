import 'match-media-mock'
import { screen } from '@testing-library/react'
import { render } from 'utils/tests'

import Profile from '.'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ asPath: '/profile/me' }))
}))

jest.mock('templates/Base', () => {
  // eslint-disable-next-line react/display-name
  return ({ children }: { children: React.ReactNode }) => {
    return <div data-testid="base">{children}</div>
  }
})

jest.mock('components/Heading', () => {
  // eslint-disable-next-line react/display-name
  return ({ children }: { children: React.ReactNode }) => {
    return <div data-testid="heading">{children}</div>
  }
})

jest.mock('components/ProfileMenu', () => {
  // eslint-disable-next-line react/display-name
  return () => {
    return <div data-testid="profile-menu" />
  }
})

describe('<Profile />', () => {
  it('should render sections', () => {
    render(<Profile>Lorem Ipsum</Profile>)

    expect(screen.getByText('Lorem Ipsum')).toBeInTheDocument()
    expect(screen.getByText('My profile')).toBeInTheDocument()
    expect(screen.getByTestId('profile-menu')).toBeInTheDocument()
  })
})
