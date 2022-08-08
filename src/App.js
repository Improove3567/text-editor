import './App.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from "react"
import parse from "html-react-parser"

function App() {
  const [text, setText] = useState("");
  return (
    <div className='App'>
      <div className="editor">
      <h2>Using CKEditor 5 build in React</h2>
      <CKEditor
        editor={ClassicEditor}
        data={ text }
        onReady={editor => {
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setText(data)
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />
    </div>
    <div className='showing_text'>
      <p>{ parse(text) }</p>
    </div>
    </div>
  );
}

export default App;
