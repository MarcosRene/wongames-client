import { Container } from 'components/Container'
import Empty from 'components/Empty'

import Base from 'templates/Base'

export default function Page404() {
  return (
    <Base>
      <Container>
        <Empty
          title="404: Not Found"
          description="Ops... this is page does not exists. Go back to the store and enjoy or offers."
          hasLink
        />
      </Container>
    </Base>
  )
}
