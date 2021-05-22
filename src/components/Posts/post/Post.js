import React from "react";
import useStyles from "./style";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {useDispatch} from 'react-redux'
import {deletePost} from '../../../actions/posts'

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch()
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.image}
        title={post.title}
      />

      <div className={classes.overlay}>
        {/* <Typography variant="h6">{post.owner}</Typography> */}
      </div>

      {/* update the post with the button  */}
      <div className={classes.overlay2}>
        {/* //update the card with the id 'setCurrentId'  */}
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>

      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body2">{post.description}</Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() =>dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
