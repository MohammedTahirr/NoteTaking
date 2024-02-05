import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Notes from '../screens/Notes';
import DeleteNote from '../screens/DeleteNote';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notes" component={Notes} />
      <Stack.Screen name="DeleteNote" component={DeleteNote} />
    </Stack.Navigator>
  );
};

export default MainStack;
