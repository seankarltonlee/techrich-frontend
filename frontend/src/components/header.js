import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { title } = props;
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          <Link href="/">{title}</Link>
        </Typography>
      </Toolbar>
    </React.Fragment>
  );
}
