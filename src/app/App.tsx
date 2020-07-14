import React from 'react'
import { ThemeProvider } from 'styled-components'
import Chat from '../components/Chat'
import { getTheme } from '../providers/theme/getTheme'
import { RootState } from '../store/store'
import { useSelector } from 'react-redux'

import './App.scss'

function App() {
  const { themeName } = useSelector( ( state: RootState ) => state.ui );
  return (
    <ThemeProvider theme={ getTheme( themeName ) }>
      <Chat />
    </ThemeProvider>
  );
}

export default App;
