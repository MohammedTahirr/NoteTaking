import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Seperator = ({seperate = 5}) => {
  return <View style={styles.container(seperate)} />;
};

const styles = StyleSheet.create({
  container: seperate => ({
    marginVertical: seperate,
  }),
});

export default Seperator;
