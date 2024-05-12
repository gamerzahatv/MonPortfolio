import './App.css';
import WebsiteTaskbar from './components/Taskbar/Taskbar';
import { createGlobalStyle } from 'styled-components';
import WebsiteDesktop from './components/Desktop';
import { GlobalStyle, ThemeProvider } from '@react95/core';
import { useEffect } from "react"

const BodyFontSizeOverride = createGlobalStyle`
  body{
    font-size: 15px
  }
`;

function App() {
  return (
    <div className="App">
      <div className='App-body'>
      <ThemeProvider> 
        <GlobalStyle />
        <BodyFontSizeOverride />
        <WebsiteDesktop />
        <WebsiteTaskbar />
      </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
