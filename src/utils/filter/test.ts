import { parseQueryStringToFilters, parseQueryStringToFilter } from '.'

const filterItems = [
  { name: 'price', type: 'radio' },
  { name: 'platforms', type: 'checkbox' },
  { name: 'developers', type: 'checkbox' },
  { name: 'sort', type: 'radio' }
]

const queryString = {
  price: 100,
  platforms: ['windows', 'linux'],
  developers: 'Rockstar Games',
  sort: 'price:asc'
}

describe('parseQueryStringToFilters()', () => {
  it('should parse queryString to filters format', () => {
    const parseQuery = parseQueryStringToFilters({ queryString, filterItems })

    expect(parseQuery).toStrictEqual({
      price: 100,
      platforms: {
        name: ['windows', 'linux']
      },
      developers: { name: 'Rockstar Games' }
    })
  })
})

describe('parseQueryStringToFilter()', () => {
  it('should parse queryString to filters values format', () => {
    const parseQuery = parseQueryStringToFilter({ queryString, filterItems })

    expect(parseQuery).toStrictEqual({
      price: 100,
      platforms: ['windows', 'linux'],
      developers: ['Rockstar Games'],
      sort: 'price:asc'
    })
  })
})
