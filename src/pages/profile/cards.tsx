import CardList from 'components/CardList'

import ProfileTemplate from 'templates/Profile'

import { CardListProps } from 'components/CardList/types'

import cardsMock from 'components/PaymentOptions/mock'

export default function Index(props: CardListProps) {
  return (
    <ProfileTemplate>
      <CardList {...props} />
    </ProfileTemplate>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      cards: cardsMock
    }
  }
}
