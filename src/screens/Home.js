import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Icons from '../../assets/svg/Icons';
import Seperator from '../components/Seperator';
import Typography from '../config/Typography';
import colors from '../config/colors';

const Home = ({navigation}) => {
  const navigateTo = () => {
    navigation.navigate('Notes');
  };

  return (
    <View style={styles.container}>
      <SvgXml xml={Icons.Face()} />
      <Seperator seperate={10} />
      <Typography.PrimaryText fontSize={48}>
        All thoughts.
      </Typography.PrimaryText>
      <Seperator />
      <Typography.PrimaryText fontSize={48}>One place.</Typography.PrimaryText>
      <Seperator />
      <Typography.LightText textAlign="center" paddingHorizontal={25}>
        Dive right in and clear that mind of yours by writing your thoughts
        down.
      </Typography.LightText>
      <Seperator seperate={30} />
      <SvgXml onPress={navigateTo} xml={Icons.ButtonRight()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
});

export default Home;
