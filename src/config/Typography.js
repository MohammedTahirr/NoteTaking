import {Text} from 'react-native';
import colors from './colors';

const PrimaryText = ({
  fontSize = 38,
  lineHeight = 48,
  children,
  textAlign = 'left',
}) => (
  <Text style={{fontSize, lineHeight, fontFamily: 'Otama.ep', textAlign}}>
    {children}
  </Text>
);

const LightText = ({
  fontSize = 16,
  lineHeight = 22,
  children,
  textAlign = 'left',
  paddingHorizontal = 0,
  color = colors.grey,
}) => (
  <Text
    style={{
      fontSize,
      lineHeight,
      color,
      textAlign,
      paddingHorizontal,
      fontFamily: 'Roboto-Regular',
    }}>
    {children}
  </Text>
);

const Typography = {PrimaryText, LightText};

export default Typography;
