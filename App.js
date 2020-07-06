/**
 * React Component to initialize Application.
 * Add wrappers and global libraries and stylesheet here
 */

import React from 'react';
import Main from './components/Main';
import { SafeAreaView } from 'react-native';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'react-native-elements';

const App = () => {
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
