import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import GoogleLogo from 'assets/images/google.png'
import FacebookLogo from 'assets/images/facebook.png'
import { loginThunk } from 'data/store/userData'
import { Input, Button } from 'components'
import {
  AuthorizeBackground,
  AuthorizePage,
  FormContainer,
  ForgotPassword,
  NetworksTitle,
  NetworkIcon,
  NetworkContainer,
} from 'styled/authorizeForm'

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(loginThunk(data))
  }

  return (
    <AuthorizePage>
      <AuthorizeBackground />
      <FormContainer>
        <h1>Увійти</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            control={control}
            icon={['fa', 'user']}
            name="email"
            label="Логін"
            placeholder="Введіть логін"
            rules={{ required: true }}
            errors={errors.email}
          />
          <Input
            icon={['fas', 'lock']}
            control={control}
            name="password"
            label="Пароль"
            placeholder="Введіть пароль"
            rules={{ required: true }}
            style={{ marginBottom: '1.5rem' }}
            errors={errors.password}
          />
          <ForgotPassword>Забули пароль ?</ForgotPassword>
          <Button type="submit">Увійти</Button>
        </form>
        <NetworksTitle>Увійти за допомогою</NetworksTitle>
        <NetworkContainer>
          <NetworkIcon src={FacebookLogo} />
          <NetworkIcon src={GoogleLogo} />
        </NetworkContainer>
      </FormContainer>
    </AuthorizePage>
  )
}
