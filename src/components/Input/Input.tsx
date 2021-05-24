import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useController } from 'react-hook-form'
import { InputContainer, StyledInput, BottomLine, Label } from './styled'

export default function Input(props) {
  const { label, icon, placeholder, style } = props
  const { field } = useController(props)
  return (
    <>
      <Label>{label}</Label>
      <InputContainer style={style}>
        {icon && <FontAwesomeIcon icon={icon} />}
        <StyledInput {...field} placeholder={placeholder} />
        <BottomLine />
      </InputContainer>
    </>
  )
}
