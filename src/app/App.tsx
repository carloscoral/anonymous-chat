import React from 'react'
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components'
import Chat from '../components/Chat'
import { getTheme } from '../providers/theme/getTheme'

import './App.scss'
import { RootState } from '../store/store'

function App() {
  const { themeName } = useSelector( ( state: RootState ) => state.ui );

  return (
    <ThemeProvider theme={ getTheme( themeName ) }>
      <Chat />
    </ThemeProvider>
  );
}

export default App;
