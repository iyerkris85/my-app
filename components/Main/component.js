/**
 * Main Component.
 * Always the first component to load for the Application
 */
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import MainStyles from './style';

const Main = (props) => {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!');
  return (
    <View style={MainStyles.container}>
      <Text>{outputText}</Text>
      <Button title="Change Text" onPress={() => setOutputText('The text has been changed!!')} />
      <StatusBar style="auto" />
    </View>
  );
};

export default Main;
