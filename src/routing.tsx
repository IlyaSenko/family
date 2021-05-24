import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Login, Register, Profile, Tree } from 'pages'

export default function Routing() {
  return (
    <BrowserRouter>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/tree">
        <Tree />
      </Route>
    </BrowserRouter>
  )
}
