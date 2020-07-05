/**
 * React Component to initialize Application.
 * Add wrappers and global libraries and stylesheet here
 */

import React from 'react';
import Main from './components/Main';
import GlobalStyles from './styles/GlobalStyles';

export default function App() {
  return <Main globalStyles={GlobalStyles}></Main>;
}
