import React, { useState } from "react";
import useStyles from "./style";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { useDispatch } from "react-redux";

//get the function create a post from the action of redux and dispatch it in the handleSubmit so i am mading this request when the button is clicked
import { createPost } from "../../actions/posts";

const Form = () => {
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    owner: "",
    image: "",
  });

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createPost(postData));
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
          type="submit fullWidth">
          SUBMIT
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
