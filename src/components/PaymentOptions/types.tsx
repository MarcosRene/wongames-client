export type PaymentCard = {
  cardNumber: string
  img: string
  cardFlag: string
}

export type PaymentOptionsProps = {
  cards?: PaymentCard[]
  handlePayment(): void
}
