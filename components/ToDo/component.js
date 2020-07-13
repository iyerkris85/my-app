/**
 * ToDo Page displays a list of ToDo
 */
import React, { useState } from 'react';
import { Animated, Dimensions, Text, TouchableHighlight, View } from 'react-native';
import TodoInput from '../TodoInput';
import ToDoStyles from './style';
import { Icon } from 'react-native-elements';
import { SwipeListView } from 'react-native-swipe-list-view';

const AppToDo = () => {
  const [todoList, settodoList] = useState([]);

  // Add to the ToDo List
  const addToDoList = (text) => {
    const key = Math.random() + '';
    settodoList((todoList) => [...todoList, { key: key, text: text }]);
  };

  //Clear the ToDo List
  const clearToDoList = () => {
    settodoList([]);
  };

  //Item to be renderd
  const renderItem = (data) => (
    <Animated.View>
      <TouchableHighlight
        onPress={() => console.log('You touched ' + data.item.key)}
        style={ToDoStyles.rowFront}
        underlayColor={'#AAA'}>
        <View>
          <Text>{data.item.text}</Text>
        </View>
      </TouchableHighlight>
    </Animated.View>
  );

  //Delete Data on Swipe
  const onSwipeValueChange = (swipeData) => {
    const { key, value } = swipeData;
    let animationIsRunning = false;
    if (value < -Dimensions.get('window').width && !animationIsRunning) {
      animationIsRunning = true;
      Animated.timing(new Animated.Value(1), {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        const newData = [...todoList];
        const prevIndex = todoList.findIndex((item) => item.key === key);
        newData.splice(prevIndex, 1);
        settodoList(newData);
        animationIsRunning = false;
      });
    }
  };

  const renderHiddenItem = () => (
    <View style={ToDoStyles.rowBack}>
      <View style={[ToDoStyles.backRightBtn, ToDoStyles.backRightBtnRight]}>
        <Icon color="white" name="delete" type="material" />
        <Text style={ToDoStyles.backTextWhite}>Delete</Text>
      </View>
    </View>
  );

  return (
    <View style={ToDoStyles.container}>
      <TodoInput add={addToDoList} />
      <View style={ToDoStyles.todocontainer}>
        <SwipeListView
          disableRightSwipe
          data={todoList}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-Dimensions.get('window').width}
          previewRowKey={'0'}
          previewOpenValue={-40}
          previewOpenDelay={3000}
          onSwipeValueChange={onSwipeValueChange}
        />
      </View>
    </View>
  );
};

export default AppToDo;
