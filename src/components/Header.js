import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Icons from '../../assets/svg/Icons';
import colors from '../config/colors';

const Header = ({icon, onPressBack, iconStatus, onPressIcon}) => {
  return (
    <View style={styles.container}>
      <SvgXml onPress={onPressBack} xml={Icons.ButtonLeft()} />
      {iconStatus && (
        <Pressable onPress={onPressIcon}>
          <SvgXml xml={icon} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 25,
    backgroundColor: colors.white,
  },
});

export default Header;
