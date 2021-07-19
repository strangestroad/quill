import { useState, useEffect } from 'react';
import { Box, makeStyles, FormControl, InputBase, Button, TextareaAutosize } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';

import { getPost } from '../../service/api';

const useStyle= makeStyles((theme)=>({
    image:{
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    container:{
        padding: '0 100px',
        [theme.breakpoints.down('md')]:{
            padding:0
        }
    },
    form:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    textField: {
        flex: 1,
        margin: '0 30px',
        fontSize: 25
    },
    textarea: {
        width: '100%',
        margin: 50,
        border: 'none',
        fontSize: 18,
        '&:focus-visible':{
            outline: 'none'
        }
    }
}));

const UpdateView= ({match}) =>{
    const classes= useStyle();
    const url='https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    
    const [post, setPost] = useState({});

    useEffect(() => {
        const fetchData = async() => {
            let data = await getPost(match.params.id);
            console.log(data);
            setPost(data);
        }
        fetchData();
    },[])
    
    return(
        <Box className={classes.container}>
            <img className={classes.image} src={post.picture || url} alt="Banner" />

            <FormControl className={classes.form}>
                <AddCircle fontSize='large' color='action'></AddCircle>

                <InputBase placeholder='Title' value={post.title} className={classes.textField}/>
                <Button variant='contained' color='primary'>Update</Button>    
            </FormControl>

            <TextareaAutosize 
                rowsMin={5}
                placeholder="Tell your story..."
                value={post.description}
                className={classes.textarea}
            />
        </Box>
    )
}

export default UpdateView;