import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { getAllPosts} from '../../service/api';
//components
import Post from './Post';

const Posts = () => {
    const [posts, setPosts] =useState([]);
    //let posts=[1,2,3,4,5,6,7,8,9];

    useEffect(() => {
        const fetchData = async() => {
            let data = await getAllPosts();
            console.log(data);
            setPosts(data);
        }
        fetchData();
    }, []) 

    return (
        posts.map(post =>(
            <Grid item lg={3} sm={4} xs={12}>
                <Link to={`/details/${post._id}`} style={{textDecoration: 'none', color: 'inherit'}}>
                    <Post post={post} />
                </Link>
            </Grid>
        ))
    )
}

export default Posts;