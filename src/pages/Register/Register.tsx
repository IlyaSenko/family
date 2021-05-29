import React from 'react'
import { useForm } from 'react-hook-form'
// import { useDispatch } from 'react-redux'
import GoogleLogo from 'assets/images/google.png'
import FacebookLogo from 'assets/images/facebook.png'
// import { loginThunk } from 'data/store/userData'
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

export default function Register() {
  const { control, handleSubmit } = useForm()
  // const dispatch = useDispatch()

  const onSubmit = (data) => {
    console.log(data)
    // dispatch(loginThunk(data))
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
            name="surname"
            label="Прізвище"
            placeholder="Введіть прізвище"
            rules={{ required: true }}
          />
          <Input
            control={control}
            icon={['fa', 'user']}
            name="name"
            label="Логін"
            placeholder="Введіть логін"
            rules={{ required: true }}
          />
          <Input
            control={control}
            icon={['fa', 'user']}
            name="patronymic"
            label="По-батькові"
            placeholder="Введіть по-батькові"
          />
          <Input
            control={control}
            icon={['fa', 'user']}
            name="email"
            label="Електронна пошта"
            placeholder="Введіть електронну пошту"
            rules={{ required: true }}
          />
          <Input
            icon={['fas', 'lock']}
            control={control}
            name="password"
            label="Пароль"
            placeholder="Введіть пароль"
            rules={{ required: true }}
            style={{ marginBottom: '1.5rem' }}
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
