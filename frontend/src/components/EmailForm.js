import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useInputChange } from "./useInputChange";

const axios = require("axios");

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

async function submitEmail(data) {
  try {
    //   TODO: Remove logging statements
    console.log(data);
    const response = await axios.post("http://localhost:5000/subscribe", data, {
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

export default function EmailForm() {
  const classes = useStyles();
  const [input, handleInputChange] = useInputChange();
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Join the list
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                id="firstName"
                label="First Name"
                variant="outlined"
                required
                fullWidth
                autoFocus
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => submitEmail(input)}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}
