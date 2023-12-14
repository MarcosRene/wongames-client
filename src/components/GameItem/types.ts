export type PaymentInfoProps = {
  img: string
  cartNumber: string
  purchaseDate: string
  cartFlag: string
}

export type GameItemProps = {
  img: string
  title: string
  price: string
  downloadLink?: string
  paymentInfo?: PaymentInfoProps
}
