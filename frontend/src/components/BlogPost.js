import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Markdown from "./Markdown";
import EmailForm from "./EmailForm";

const styles = (theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
});

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      md: "",
    };
  }

  componentDidMount() {
    fetch(this.props.post)
      .then((res) => res.text())
      .then((md) => {
        this.setState({
          md,
        });
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="sm">
        <Grid item xs={12} md={12}>
          <Markdown className={classes.markdown}>{this.state.md}</Markdown>
          <EmailForm></EmailForm>
        </Grid>
      </Container>
    );
  }
}

BlogPost.propTypes = {
  title: PropTypes.string,
};

export default withStyles(styles)(BlogPost);
