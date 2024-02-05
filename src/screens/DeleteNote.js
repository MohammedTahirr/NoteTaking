import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';
import {SvgXml} from 'react-native-svg';
import colors from '../config/colors';
import Icons from '../../assets/svg/Icons';
import Seperator from '../components/Seperator';
import Typography from '../config/Typography';
import Buttons from '../config/Buttons';
import {useDispatch, useSelector} from 'react-redux';
import {setNotesData} from '../redux/features/NoteSlice';

const DeleteNote = ({navigation}) => {
  const {Notes} = useSelector(state => state.Notes);
  const dispatch = useDispatch();

  const navigateTo = () => {
    navigation.goBack();
  };

  const deleteSelectedNotes = () => {
    const updatedNotes = Notes.filter(note => !note.selected);
    dispatch(setNotesData(updatedNotes));
    navigation.goBack();
  };

  return (
    <>
      <Header onPressBack={navigateTo} />
      <View style={styles.container}>
        <Seperator seperate={35} />
        <SvgXml xml={Icons.HandThread()} />
        <Typography.PrimaryText textAlign="center" fontSize={48}>
          You sure {'\n'}about this?
        </Typography.PrimaryText>
        <Seperator seperate={20} />
        <Typography.LightText textAlign="center">
          If you delete this note, threat not, you can still find it in the bin.
        </Typography.LightText>
        <View style={styles.buttonContainer}>
          <Buttons.PrimaryButton
            onPress={deleteSelectedNotes}
            textColor={colors.primaryDark}
            backgroundColor={colors.primary}
            text={'Delete Note'}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 25,
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: '3%',
    width: '100%',
  },
});

export default DeleteNote;
