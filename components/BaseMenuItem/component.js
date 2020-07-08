/**
 * Renders the Menu in the Base
 */
import React from 'react';
import MenuItemStyles from './style';
import { View, Text } from 'react-native';

const AppBaseMenuItem = (props) => {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
};

export default AppBaseMenuItem;
