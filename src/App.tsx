import React, { useState } from 'react';
import './App.css';
import FileBase64 from './react-file-base64';


function App() {

  const [files, setFiles] = useState<any>([])

  const getFiles = (files: any) => {
    setFiles(files)
  }

  return (
    <div>

      <h1 className="text-center">React File to Base64 Converter</h1>

      <div className="text-center mt-25">
        <p className="text-center"> *) Try To Upload Some Image~</p>
        <FileBase64
          multiple={true}
          onDone={getFiles} />
      </div>

      <div className="text-center">
        {files.map((file: any, i: any) => {
          return <img key={i} src={file.base64} />
        })}
        <img src="" />
      </div>

      {files.length != 0 ?
        <div>
          <h3 className="text-center mt-25">Callback Object</h3>
          <div className="pre-container">
            <pre>{JSON.stringify(files, null, 2)}</pre>
          </div>
        </div>
        : null}

    </div>
  )


}

export default App;
