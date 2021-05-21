import React from "react";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Grow from "@material-ui/core/Grow";
import Grid from "@material-ui/core/Grid";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
// import img from "./images/img1.jpg";
import useStyles from "./style";

const App = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Dream Job{" "}
        </Typography>
        {/* <img src={img}  className ={classes.image}  alt="jobs" height="00" /> */}
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
