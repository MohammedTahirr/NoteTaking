import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigation/MainStack';
import {Provider} from 'react-redux';
import store from './src/redux/store';

LogBox.ignoreLogs(['Warning: ...', 'new NativeEventEmitter']);
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
