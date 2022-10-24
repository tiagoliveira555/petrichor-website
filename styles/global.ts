import { createGlobalStyle } from 'styled-components'

// Creating a GlobalStyle (root style) to set a default style in the app
// I recommend to install the Styled-Components extesion to intellisense -> vscode-styled-components
export const GlobalStyle = createGlobalStyle`
  
  /* Here we define the 'variables' with CSS code. Most used to aplly default colors  */
  :root {
    --bg: #F2F2F7;
    --bg-content: #F8F8F8;

    --title-color: #1C1C1E;
    --subtitle-color: #2C2C2E;
    --text-color: #333333;

    --opaque-color: #AEAEB2;

    --blue: #007AFF;
  }

  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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