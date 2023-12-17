import CardList from 'components/CardList'

import Profile from 'templates/Profile'

import { CardListProps } from 'components/CardList/types'

import cardsMock from 'components/PaymentOptions/mock'

export default function Index(props: CardListProps) {
  return (
    <Profile>
      <CardList {...props} />
    </Profile>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      cards: cardsMock
    }
  }
}
