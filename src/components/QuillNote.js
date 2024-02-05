import React, {useRef} from 'react';
import {View} from 'react-native';
import QuillEditor, {QuillToolbar} from 'react-native-cn-quill';

const QuillNote = ({initialHtml, onUpdate}) => {
  console.log(initialHtml);
  const editor = useRef(null);

  return <View></View>;
};

export default QuillNote;
