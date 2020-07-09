/**
 * Renders the Menu in the Base
 */
import React from 'react';
import MenuItemStyles from './style';
import { View } from 'react-native';
import { Text, Icon } from 'react-native-elements';

const AppBaseMenuItem = (props) => {
  return (
    <View style={MenuItemStyles.viewStyle}>
      <Icon name={props.icon} size={50} type={props.material} />
      <Text>{props.label}</Text>
    </View>
  );
};

export default AppBaseMenuItem;
