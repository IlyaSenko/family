import React, { ReactNode } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { useIsAuthenticated } from 'utils/auth'
import { Login, Register, Profile, Tree } from 'pages'
import { LOGIN_ROUTE, REGISTER_ROUTE, PROFILE_ROUTE, TREE_ROUTE } from './routes'

function AuthRoute({
  children,
  path,
  exact,
}: {
  children?: ReactNode
  path: string
  exact?: boolean
}) {
  const isAuthenticated = useIsAuthenticated()
  if (isAuthenticated) {
    if (path === LOGIN_ROUTE && REGISTER_ROUTE) {
      return <Redirect to={PROFILE_ROUTE} />
    }
    return (
      <Route path={path} exact={exact}>
        {children}
      </Route>
    )
  }
  if (path === LOGIN_ROUTE && REGISTER_ROUTE) {
    return (
      <Route path={path} exact={exact}>
        {children}
      </Route>
    )
  }
  return <Redirect to={LOGIN_ROUTE} />
}

export default function Routing() {
  return (
    <BrowserRouter>
      <AuthRoute exact path={LOGIN_ROUTE}>
        <Login />
      </AuthRoute>
      <AuthRoute exact path={REGISTER_ROUTE}>
        <Register />
      </AuthRoute>
      <AuthRoute exact path={PROFILE_ROUTE}>
        <Profile />
      </AuthRoute>
      <AuthRoute exact path={TREE_ROUTE}>
        <Tree />
      </AuthRoute>
    </BrowserRouter>
  )
}
