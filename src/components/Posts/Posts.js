import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../actions/posts";
import Post from "./post/Post";
import useStyles from "./style";
const Posts = (props) => {
  const classes = useStyles();

  useEffect(() => {
    props.getPosts();
  }, []);

  return !props.posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}>
      {props.posts.map((post) => {
        return (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} />
          </Grid>
        );
      })}
    </Grid>
  );
};

const mapStateToProps = (state) => ({ posts: state.posts });
const mapDispatchToProps = { getPosts };
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
