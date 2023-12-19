import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'

import UserDropdown from '.'

export default {
  title: 'UserDropdown',
  component: UserDropdown,
  args: {
    username: 'John Doe'
  }
} as Meta<typeof UserDropdown>

const Container = styled.div`
  padding: 1.6rem;
  max-width: 98%;
  display: flex;
  justify-content: flex-end;
`

export const Default: StoryObj<typeof UserDropdown> = {
  render: (args) => (
    <Container>
      <UserDropdown {...args} />
    </Container>
  )
}
