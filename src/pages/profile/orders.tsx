import OrderList from 'components/OrderList'

import Profile from 'templates/Profile'

import { OrderListProps } from 'components/OrderList/types'

import ordersMock from 'components/OrderList/mock'

export default function Index(props: OrderListProps) {
  return (
    <Profile>
      <OrderList {...props} />
    </Profile>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      items: ordersMock
    }
  }
}
