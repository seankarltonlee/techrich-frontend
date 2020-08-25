import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography component="h1" variant="h2" noWrap>
          {title}
        </Typography>
      </Toolbar>
    </React.Fragment>
  );
}
