import { useState } from 'react'
import { Close } from '@styled-icons/material-outlined/Close'
import { FilterList } from '@styled-icons/material-outlined/FilterList'

import Checkbox from 'components/Checkbox'
import Heading from 'components/Heading'
import Radio from 'components/Radio'

import * as S from './styles'
import Button from 'components/Button'

import { ExploreSidebarProps, FieldTypes, ItemProps } from './types'

const ExploreSidebar = ({
  items,
  initialValues = {},
  onFilter
}: ExploreSidebarProps) => {
  const [values, setValues] = useState(initialValues)
  const [isOpen, setIsOpen] = useState(false)

  const handleOnFilter = () => {
    handleOpenCloseMenu()
    onFilter(values)
  }

  const handleFieldsChange = (name: string, value: string | boolean) => {
    setValues((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleOpenCloseMenu = () => setIsOpen((prevState) => !prevState)

  const renderFieldTypes = (item: ItemProps) => {
    const fieldTypes: FieldTypes = {
      checkbox: () => {
        return item.fields.map((field) => (
          <Checkbox
            key={field.name}
            name={field.name}
            label={field.label}
            labelFor={field.name}
            isChecked={!!values[field.name]}
            onCheck={(value) => handleFieldsChange(field.name, value)}
          />
        ))
      },

      radio: () => {
        return item.fields.map((field) => (
          <Radio
            key={field.name}
            id={field.name}
            value={field.name}
            name={item.name}
            label={field.label}
            labelFor={field.name}
            defaultChecked={field.name === values[item.name]}
            onChange={() => handleFieldsChange(item.name, field.name)}
          />
        ))
      }
    }

    return fieldTypes[item.type]() ?? null
  }

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Overlay aria-hidden={isOpen} />
      <S.IconWrapper>
        <FilterList aria-label="open filters" onClick={handleOpenCloseMenu} />
        <Close aria-label="close filters" onClick={handleOpenCloseMenu} />
      </S.IconWrapper>

      <S.Content>
        {items.map((item) => (
          <S.Items key={item.title}>
            <Heading lineBottom lineColor="secondary" size="small">
              {item.title}
            </Heading>

            <>{renderFieldTypes(item)}</>
          </S.Items>
        ))}
      </S.Content>

      <S.Footer>
        <Button fullWidth size="medium" onClick={handleOnFilter}>
          Filter
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default ExploreSidebar
