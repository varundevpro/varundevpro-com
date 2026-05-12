import { createGlobalStyle } from 'styled-components'
import "../../public/fonts/Inter Web/inter.css"

import '../styles/prism.css'

const GlobalStyle = createGlobalStyle`
  html {
    color-scheme: dark;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html,
  body {
    height: 100%;
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-kerning: normal;
    font-variant-ligatures: common-ligatures;
    font-variant-numeric: tabular-nums;
    line-height: 1.5;
  }
  
  body {
    background-color: rgba(20, 20, 20, 1);
    color: white;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  *, *::before, *::after {
    border: none;
    background-color: transparent;
    box-sizing: border-box;
  }

  input, button, textarea {
    font: inherit;
  }

  pre, code {
    font-family: 'SF Mono', SFMono-Regular, ui-monospace, 'DejaVu Sans Mono', Menlo, Consolas, monospace;
  }
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
