import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


function Form(){
const [fileState,setFileState]=useState();   
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
 
  
  const handleFileUploaded = e => {
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
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                onChange={handleFileUploaded}
                encType="multipart/form-data"   
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                Upload
                </Button>
            </label>
            <input 
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
            </div>
    );
}

export default Form;