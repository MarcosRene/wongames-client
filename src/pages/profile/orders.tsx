import OrderList from 'components/OrderList'

import ProfileTemplate from 'templates/Profile'

import { OrderListProps } from 'components/OrderList/types'

import ordersMock from 'components/OrderList/mock'

export default function Index(props: OrderListProps) {
  return (
    <ProfileTemplate>
      <OrderList {...props} />
    </ProfileTemplate>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      items: ordersMock
    }
  }
}
