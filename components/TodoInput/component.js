/**
 * Component to manage Input field for the ToDo App
 */

import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import TodoInputStyles from './style';

const AppTodoInput = (props) => {
  const [inputToDo, setInputToDo] = useState('');

  //Update inputToDo
  const updateInputTodo = (text) => {
    setInputToDo(text);
  };

  //Clear Input Field
  const clearInputTodo = () => {
    setInputToDo('');
  };

  //Call Add Method in the prop
  const addButtonPress = () => {
    if (inputToDo.length > 0 || inputToDo.replace(/\s+/g, '').length > 0) {
      props.add(inputToDo);
    }
    clearInputTodo();
  };
  return (
    <View style={TodoInputStyles.viewStyle}>
      <Input
        placeholder="Type @ToDo and click +"
        leftIcon={<Icon name="create" type="material" size={24} color="black" />}
        onChangeText={updateInputTodo}
        value={inputToDo}
      />
      <Button
        style={TodoInputStyles.buttonStyle}
        icon={<Icon name="add" size={32} type="material" color="white" />}
        onPress={addButtonPress}
      />
      <Button
        style={TodoInputStyles.buttonStyle}
        type="outline"
        icon={<Icon name="clear" size={32} color="#528BC1" type="material" />}
        onPress={clearInputTodo}
      />
    </View>
  );
};

export default AppTodoInput;
