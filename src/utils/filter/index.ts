import { ParsedUrlQueryInput } from 'querystring'
import { ItemProps } from 'components/ExploreSidebar/types'

type ParseArgs = {
  queryString: ParsedUrlQueryInput
  filterItems: Pick<ItemProps, 'type' | 'name'>[]
}

export function parseQueryStringToFilters({
  queryString,
  filterItems
}: ParseArgs) {
  const obj: Record<string, string> = {}

  for (const key of Object.keys(queryString).filter(
    (item) => item !== 'sort'
  )) {
    const item = filterItems.find((filterItem) => filterItem.name === key)
    const isCheckbox = item?.type === 'checkbox'

    obj[key] = (
      !isCheckbox
        ? queryString[key]
        : {
            name: queryString[key]
          }
    ) as string
  }

  return obj
}

export function parseQueryStringToFilter({
  queryString,
  filterItems
}: ParseArgs) {
  const obj: Record<string, string[]> = {}

  for (const key of Object.keys(queryString)) {
    const type = filterItems.find((filterItem) => filterItem.name === key)?.type
    const isCheckbox = type === 'checkbox'
    const isArray = Array.isArray(queryString[key])

    obj[key] =
      !isArray && isCheckbox
        ? [queryString[key] as string]
        : (queryString[key] as string[])
  }

  return obj
}
