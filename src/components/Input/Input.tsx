import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useController } from 'react-hook-form'
import { InputContainer, StyledInput, BottomLine, Label, Error } from './styled'

const getErrorMessage = (error: string) => {
  switch (error) {
    case 'required':
      return 'the field is required'
    default:
      return ''
  }
}
export default function Input(props) {
  const { name, label, icon, placeholder, style, errors } = props
  const { field } = useController(props)
  console.log(name, errors)

  return (
    <>
      <Label>{label}</Label>
      <InputContainer style={style}>
        {icon && <FontAwesomeIcon icon={icon} />}
        <StyledInput {...field} placeholder={placeholder} />
        <BottomLine />
        {errors && <Error>{getErrorMessage(errors.type)}</Error>}
      </InputContainer>
    </>
  )
}
