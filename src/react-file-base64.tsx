import React, { useState } from 'react';


type props = {
    multiple: boolean,
    onDone: (file: any) => void
}
export default function FileBase64({ multiple = false, onDone }: props) {

    const handleChange = (e: any) => {

        // get the files
        let files = e.target.files;

        // Process each file
        let allFiles: any[] = [];

        for (var i = 0; i < files.length; i++) {

            let file = files[i];

            // Make new FileReader
            let reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load somthing...
            reader.onload = () => {

                // Make a fileInfo Object
                let fileInfo = {
                    name: file.name,
                    type: file.type,
                    size: Math.round(file.size / 1000) + ' kB',
                    base64: reader.result,
                    file: file,
                };

                // Push it to the state
                allFiles.push(fileInfo);

    
                // If all files have been proceed
                if (allFiles.length == files.length) {
                    // Apply Callback function
                    if (multiple) onDone(allFiles);
                    else onDone(allFiles[0]);
                }

            }

        }

    }


    return (
        <input
            type="file"
            onChange={handleChange}
            multiple={multiple} />
    );

}
