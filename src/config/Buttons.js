import {Pressable, StyleSheet, Text} from 'react-native';
import colors from './colors';

const PrimaryButton = ({
  text,
  backgroundColor,
  textColor = colors.primaryDark,
  onPress,
}) => (
  <Pressable
    onPress={onPress}
    style={styles.primaryButtoncontainer({backgroundColor})}>
    <Text style={styles.primaryButtonText({color: textColor})}>{text}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  primaryButtoncontainer: ({backgroundColor}) => ({
    backgroundColor,
    borderRadius: 30,
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 18,
    borderWidth: 0.5,
    borderColor: colors.primaryDark,
  }),
  primaryButtonText: ({color}) => ({
    color,
    fontFamily: 'Roboto-Regular',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
  }),
});

const Buttons = {
  PrimaryButton,
};

export default Buttons;
