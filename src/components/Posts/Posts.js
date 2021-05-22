import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useSelector} from 'react-redux'
import React from "react";
import Post from "./post/Post";
import useStyles from "./style";

const Posts = ({setCurrentId}) => {
  const classes = useStyles();

  //fetch all the post with useSelector 
  const posts=useSelector((state)=>state.posts)
 
  
  return (
    !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}>
      {posts.map((post) => {
        return (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        );
      })}
    </Grid>
  )
  );
};


export default Posts