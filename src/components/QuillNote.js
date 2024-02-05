import React, {useRef} from 'react';
import {View} from 'react-native';
import {QuillToolbar, QuillEditor} from 'react-native-cn-quill';

const QuillNote = ({initialHtml, onUpdate}) => {
  console.log(initialHtml);
  const editor = useRef(null);

  return (
    <View>
      <QuillToolbar editor={editor} options="full" theme="light" />
      <QuillEditor
        ref={editor}
        style={{height: 200}}
        initialHtml="<h1>Quill Editor for react-native</h1>"
        onChange={html => onUpdate(html)}
      />
    </View>
  );
};

export default QuillNote;
