import { createGlobalStyle } from 'styled-components'

// Creating a GlobalStyle (root style) to set a default style in the app
// I recommend to install the Styled-Components extesion to have the intellisense -> vscode-styled-components
export const GlobalStyle = createGlobalStyle`
  /* Here we define the 'variables' with CSS code. Most used to aplly default colors  */
  :root {
    --bg: #F2F2F7;
    --bg-content: #F8F8F8;

    --title-color: #1C1C1E;
    --subtitle-color: #2C2C2E;
    --text-color: #333333;

    --gray: #AEAEB2;

    --blue: #007AFF;
    --blue-outline: #007AFF80;
    --blue-opacity: #007AFF05;
  }

  html,
  body {
    font-family: 'Inter', sans-serif;
    background: var(--bg);
    font-weight: 900;
  }
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--gray);
    border-radius: 2px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #59595C;
}

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: var(--subtitle-color);
      background: var(--bg);
    }
  }

`