import React, { useState, useEffect } from "react";
import useStyles from "./style";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
//get the function create a post from the action of redux and dispatch it in the handleSubmit so i am mading this request when the button is clicked
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    owner: "",
    image: "",
  });

  //fetch the selected Post by id and modify it so if it exist it will return the Post with his current values
  //i useed the  method  to search  the post with his Id
  const post = useSelector((state) =>
    currentId ? state.posts.find((post) => post._id === currentId) : null
  );

  const classes = useStyles();
  const dispatch = useDispatch();

  //seEffect to populate the populate the value of the form with the post that we want to update

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Dispatch the Post with the updatePost. if we don't have a current id it means we are creating a new Post
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else dispatch(createPost(postData));
    clear()
  };

  // clear the form
  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: "",
      description: "",
      owner: "",
      image: "",
    });
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}>
        <Typography variant="h6">add a new offer</Typography>
        <TextField
          name="company"
          variant="outlined"
          label="Campany"
          fullWidth
          value={postData.owner}
          onChange={(event) =>
            setPostData({ ...postData, owner: event.target.value })
          }
        />
        <TextField
          name="job title "
          variant="outlined"
          label="Job title "
          fullWidth
          value={postData.title}
          onChange={(event) =>
            setPostData({ ...postData, title: event.target.value })
          }
        />
        <TextField
          name="description"
          variant="outlined"
          label="Description"
          fullWidth
          value={postData.description}
          onChange={(event) =>
            setPostData({ ...postData, description: event.target.value })
          }
        />
        <TextField
          name="image"
          variant="outlined"
          label="Logo"
          fullWidth
          value={postData.image}
          onChange={(event) =>
            setPostData({ ...postData, image: event.target.value })
          }
        />
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth>
          SUBMIT
        </Button>

        <Button
          variant="contained"
          color="secondary"
          size="small"
          type="submit"
          fullWidth
          onClick={clear}>
          clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
