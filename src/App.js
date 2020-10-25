import React from 'react'
import { useSelector } from 'react-redux'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import TodoApp from './pages/TodoApp'
import themes from './lib/themes'

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    ::-webkit-scrollbar {
    width: 2px;
    background:${(p) => p.theme.selected};
    border-radius: 2.5px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2.5px;
    background-color: ${(p) => p.theme.text};
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
  }
  *:after, *:before {
    box-sizing: inherit;
  }
  p, ul, li, h1, h2, h3, h4 ,h5 ,h6, html, body{
    margin: 0;
    padding: 0;
  }
  li{
    list-style-type: none;
  }
  h1, h2, h3, h4,h5, h6{
    font-weight: normal;
  }
  
  input, textarea, button{
    outline: none;
    border:none;
    background:none;
  }
  html{
    font-size: 62.5%;
  }
  body{
    font-family:Arial, Helvetica, sans-serif;
    font-size:${(p) => p.theme.h5}; ;
    color:${(p) => p.theme.opposite}; 
    font-weight: 400;
    min-width: 320px;
    overflow-x: hidden;
    background: ${(p) => p.theme.main};
    line-height: normal;
  }
  @media (min-width: 1921px) {
  body {
    font-size: 1.6rem;
  }
}
`

const App = () => {
  const currentTheme = useSelector((s) => s.general.theme)
  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <GlobalStyle />
      <TodoApp />
    </ThemeProvider>
  )
}
export default App
