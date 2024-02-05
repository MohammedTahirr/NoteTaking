import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  ScrollView,
} from 'react-native';
import Header from '../components/Header';
import colors from '../config/colors';
import Icons from '../../assets/svg/Icons';
import Typography from '../config/Typography';
import Seperator from '../components/Seperator';
import {useDispatch, useSelector} from 'react-redux';
import {SvgXml} from 'react-native-svg';
import InputField from '../components/TextInput';
import Buttons from '../config/Buttons';
import checkNonEmpty from '../utils/checkNonEmpty';
import {setNotesData} from '../redux/features/NoteSlice';
import QuillEditor, {QuillToolbar} from 'react-native-cn-quill';
import QuillNote from '../components/QuillNote';

const Notes = ({navigation}) => {
  const {Notes} = useSelector(state => state.Notes);
  const dispatch = useDispatch();
  const editor = useRef();

  const [deleteStatus, setDeleteStatus] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const anyNoteSelected = Notes.some(note => note.selected);
      console.log(anyNoteSelected);
      setDeleteStatus(anyNoteSelected);
    });

    return unsubscribe;
  }, [navigation]);

  const selectNote = index => {
    let data = Notes.map((note, noteIndex) =>
      noteIndex === index ? {...note, selected: !note.selected} : note,
    );
    dispatch(setNotesData(data));
    const anyNoteSelected = data.some(note => note.selected);
    setDeleteStatus(anyNoteSelected);
  };

  const navigateTo = () => {
    navigation.goBack();
  };

  const setNoteText = text => {
    setText(text);
  };

  const addNote = () => {
    const data = {text: `<h1>${text}</h1>`, selected: false};
    const textData = [...Notes, data];
    dispatch(setNotesData(textData));
    setText('');
  };

  const renderItem = ({item, index}) => (
    <Pressable onPress={() => selectNote(index)} style={styles.itemContainer}>
      <SvgXml xml={Icons.SelectIcon(item?.selected)} />
      <Typography.LightText color={colors.black}>
        {item?.text}
      </Typography.LightText>
    </Pressable>
  );

  const deleteNote = () => {
    navigation.navigate('DeleteNote');
  };

  return (
    <>
      <Header
        onPressBack={navigateTo}
        iconStatus={deleteStatus}
        icon={Icons.DeleteIcon()}
        onPressIcon={deleteNote}
      />
      {/* <QuillEditor
        style={styles.editor}
        ref={editor}
        initialHtml="<h1>Quill Editor for react-native</h1>"
      /> */}
      <ScrollView
        nestedScrollEnabled
        contentContainerStyle={styles.scrollViewContainer}
        automaticallyAdjustKeyboardInsets>
        <View style={styles.container}>
          <Typography.PrimaryText>The lost song</Typography.PrimaryText>
          <Seperator />
          <Typography.LightText textAlign="left">
            Saturday, 4th of March
          </Typography.LightText>
          <Seperator seperate={15} />
          <Typography.LightText
            lineHeight={26}
            color={colors.black}
            textAlign="left">
            I had a plan, but never finished it, and I've been searching for the
            thought and I've been searching in a haze, I try all days to
            remember it, but now the blueprint in my mind has gone, my mind
            forgot the color of direction...
          </Typography.LightText>
          <Seperator seperate={10} />
          {checkNonEmpty(Notes) ? (
            <FlatList
              nestedScrollEnabled
              data={Notes}
              keyExtractor={(_, index) => index.toString()}
              renderItem={renderItem}
            />
          ) : (
            <View style={styles.notesContainer}>
              <Typography.LightText>
                Your notes will be shown here
              </Typography.LightText>
            </View>
          )}
          <InputField value={text} onChangeText={setNoteText} />
          <Seperator />
          <Buttons.PrimaryButton
            onPress={addNote}
            textColor={colors.primaryDark}
            backgroundColor={colors.primary}
            text={'Add Note'}
          />
        </View>
      </ScrollView>
      {/* <QuillToolbar editor={editor} options="full" theme="light" /> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: colors.white,
    padding: 25,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 10,
  },
  scrollViewContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  notesContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default Notes;
