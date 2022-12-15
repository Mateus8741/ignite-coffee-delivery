import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-title']};
}
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}

::-webkit-scrollbar{
  width: 0.4rem;
}
::-webkit-scrollbar-track{
  background: ${(props) => props.theme['base-button']}
  }
::-webkit-scrollbar-thumb{
  border-radius: 2rem;
  background: ${(props) => props.theme['purple-purple']}
                             
}
`
