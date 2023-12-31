import { ParsedUrlQueryInput } from 'querystring'

type Field = {
  label: string
  name: string
}

export type FieldTypes = {
  [key: string]: () => JSX.Element[] | null
}

export type ItemProps = {
  title: string
  name: string
  type: string
  fields: Field[]
}

type Values = ParsedUrlQueryInput

export type ExploreSidebarProps = {
  items: ItemProps[]
  initialValues?: Values
  onFilter(values: Values): void
}

export type StyleProps = {
  isOpen: boolean
}
