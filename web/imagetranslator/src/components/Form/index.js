import React,{useState,useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import TextField from '@material-ui/core/TextField';


function Form(){
const [fileState,setFileState]=useState(); 
const fileInput = useRef(null);
const useStyles = makeStyles((theme) => ({
    root: {
        padding: "50px 600px",
        zIndex: 999,
        position: "absolute",
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },

  }));
 
  function fileNames() {
    const { current } = fileInput;
    if (current && current.files.length > 0) {
      let messages = [];
      for (let file of current.files) {
        messages = messages.concat(<p key={file.name}>{file.name}</p>);
      }
      return messages;
    }
    return null;
  }

  const handleFileUploaded = e => {
    setFileState();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setFileState(reader.result);
    };
    reader.readAsDataURL(file);
  };

    const classes = useStyles();
    return(
        <div className={classes.root}>
            <div>
                Upload de imagens para testar o serviço IBM/WATSON
            </div>
                <input 
                    ref={fileInput}
                    accept="image/*" 
                    className={classes.input} 
                    id="icon-button-file" 
                    type="file" 
                    onChange={handleFileUploaded}
                    encType="multipart/form-data"                
                    />
                <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                    </IconButton>
                </label>
                <div>
                    <label>
                        Valor Imagem Base 64
                    </label>
                    {fileState}
                </div>
                <div>
                    <label>
                        Nome da Imagem
                    </label>
                    {fileNames()}
                </div>
        </div>
    );
}

export default Form;