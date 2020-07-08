/**
 * Main Component.
 * Always the first component to load for the Application
 */
import React from 'react';
import { View } from 'react-native';
import MainStyles from './style';
import Header from '../Header';
import ToDo from '../ToDo';
import Footer from '../Footer';

const AppMain = () => {
  return (
    <View style={MainStyles.container}>
      <Header />
      <ToDo />
      <Footer />
    </View>
  );
};

export default AppMain;
