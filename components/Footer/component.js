/**
 * Component for Footer panel at the base of the App
 */
import React from 'react';
import { View } from 'react-native';
import FooterStyles from './style';
import BaseMenuItem from '../BaseMenuItem';

const AppFooter = () => {
  return (
    <View style={FooterStyles.contentStyle}>
      <BaseMenuItem name="1" />
      <BaseMenuItem name="2" />
      <BaseMenuItem name="3" />
    </View>
  );
};

export default AppFooter;
