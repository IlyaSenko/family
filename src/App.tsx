import React, { ReactElement, StrictMode } from 'react'
import { Provider } from 'react-redux'
import GlobalStyle from 'global-styles'
import Routing from './routing'
import { store } from './data/store/store'
import './fontawesome'

export default function App(): ReactElement {
  return (
    <StrictMode>
      <Provider store={store}>
        <GlobalStyle />
        <Routing />
      </Provider>
    </StrictMode>
  )
}
