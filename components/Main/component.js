/**
 * Main Component.
 * Always the first component to load for the Application
 */
import React from 'react';
import { View } from 'react-native';
import MainStyles from './style';
import Header from '../Header';

const AppMain = () => {
  return (
    <View style={MainStyles.container}>
      <Header />
    </View>
  );
};

export default AppMain;
