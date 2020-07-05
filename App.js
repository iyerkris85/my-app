/**
 * React Component to initialize Application.
 * Add wrappers and global libraries and stylesheet here
 */

import React from 'react';
import Main from './components/Main';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'react-native-elements';

export default function App() {
  return (
    <ThemeProvider>
      <Main globalStyles={GlobalStyles}></Main>
    </ThemeProvider>
  );
}
