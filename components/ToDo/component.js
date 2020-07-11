/**
 * ToDo Page displays a list of ToDo
 */
import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import TodoInput from '../TodoInput';
import ToDoStyles from './style';

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

  //Extract the key
  const keyExtractor = (item, index) => index.toString();

  //Item to be renderd
  const renderItem = ({ item }) => (
    <Card>
      <View>
        <Text>{item}</Text>
      </View>
    </Card>
  );

  return (
    <View style={ToDoStyles.container}>
      <TodoInput add={addToDoList} />
      <View>
        <FlatList
          keyExtractor={keyExtractor}
          data={todoList}
          renderItem={renderItem}
          disableVirtualization
        />
      </View>
    </View>
  );
};

export default AppToDo;
