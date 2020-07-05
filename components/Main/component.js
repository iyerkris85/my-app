/**
 * Main Component.
 * Always the first component to load for the Application
 */
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import MainStyles from './style';

const Main = (props) => {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!');
  return (
    <View style={MainStyles.container}>
      <Text>{outputText}</Text>
      <Button
        title="Change Text"
        type="solid"
        onPress={() => setOutputText('The text has been changed!!')}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default Main;
