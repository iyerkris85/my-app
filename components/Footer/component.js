/**
 * Component for Footer panel at the base of the App
 */
import React from 'react';
import { View } from 'react-native';
import FooterStyles from './style';
import BaseMenuItem from '../BaseMenuItem';
import basemenuconfiguration from '../../configuration/basemenu';

const AppFooter = () => {
  return (
    <View style={FooterStyles.contentStyle}>
      {basemenuconfiguration.map((menu) => {
        return <BaseMenuItem {...menu} />;
      })}
    </View>
  );
};

export default AppFooter;
