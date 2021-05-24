import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html * {
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    margin: 0;
  }

  div, p, a {
    font-size: 1.3rem;
  }
`
