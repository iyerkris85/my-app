/**
 * Header Component
 * Contains Header Name and icons. Remains Static through the app
 */
import React from 'react';
import { Header } from 'react-native-elements';
import HeaderStyles from './style';

const AppHeader = () => {
  return <Header centerComponent={{ text: 'TODO APP', style: HeaderStyles.centerText }} />;
};

export default AppHeader;
