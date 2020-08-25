import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import FeaturedImage from "./featured_image.jpg";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
    backgroundColor: theme.palette.grey[800],
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(255, 255, 255,.7)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{ backgroundImage: `url(${FeaturedImage})` }}
    >
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={8}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              Don't cheat yourself.
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              I made a career switch into software engineering when I was
              already years into a completely different career.
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              I want people to know exactly what they need to do, WITHOUT
              putting up the TENS of THOUSANDS of dollars that I did.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
