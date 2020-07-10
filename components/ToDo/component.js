/**
 * ToDo Page displays a list of ToDo
 */
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import TodoInput from '../TodoInput';

const AppToDo = () => {
  const [todoList, settodoList] = useState([]);

  // Add to the ToDo List
  const addToDoList = (text) => {
    settodoList((todoList) => [...todoList, text]);
  };

  //Clear the ToDo List
  const clearToDoList = () => {
    settodoList([]);
  };

  return (
    <View>
      <TodoInput add={addToDoList} />
      <View>
        {todoList.map((value, index) => {
          return <Text key={index}>{value}</Text>;
        })}
      </View>
    </View>
  );
};

export default AppToDo;
