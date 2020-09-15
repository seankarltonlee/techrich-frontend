import React from "react";
import ReactMarkdown from "markdown-to-jsx";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const styles = (theme) => ({
  listItem: {
    marginTop: theme.spacing(1),
  },
  heroContainer: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
    height: "50%",
    width: "36em",
    position: "center",
  },
  heroImage: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",
    width: "100%",
    height: "66%",
  },
});

const options = {
  overrides: {
    img: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <Grid container justify="center">
          <div className={classes.heroContainer}>
            <img src={props.src} className={classes.heroImage} />
          </div>
        </Grid>
      )),
    },
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h3",
      },
    },
    h2: { component: Typography, props: { gutterBottom: true, variant: "h5" } },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: "subtitle1" },
    },
    h4: {
      component: Typography,
      props: { gutterBottom: true, variant: "caption", paragraph: true },
    },
    p: { component: Typography, props: { paragraph: true, variant: "h6" } },
    a: { component: Link },
    li: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <li className={classes.listItem}>
          <Typography component="span" {...props} />
        </li>
      )),
    },
  },
};

export default function Markdown(props) {
  return <ReactMarkdown options={options} {...props} />;
}
