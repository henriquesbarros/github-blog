import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 0.45rem;
    }

    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme.colors['base-border']};
    }

    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors.blue};
      border-radius: 999px;
    }
  }

  body {
    background: ${(props) => props.theme.colors['base-background']};
    color: ${(props) => props.theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
    line-height: 160%;
  }

  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-weight: normal;
    font-size: 1rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`
