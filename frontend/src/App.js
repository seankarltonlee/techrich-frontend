import React from "react";

// Material UI Components
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

// techrich components
import Header from "./components/header";
import MainFeaturedPost from "./components/MainFeaturedPost";

const TestPost = () => (
  <Typography>
    <div>
      <div>
        “Comfort is what we seek, but it is risk that delivers it.” - Owen
        Marcus
      </div>
      <div>
        I went from being an envious wet-lab grunt to an egotistical software
        engineer. I couldn’t believe how simple it was. I’ll tell you the
        tactics here so you don’t have to waste years of your life in class.
      </div>
      <div>
        Being a software engineer is about teachability and iteration. You have
        to be willing to learn, you have to keep trying when you fail. The main
        technique is keeping things simple. Simple code is clean code. Tackle
        five simple problems instead of one big problem.
      </div>
    </div>
  </Typography>
);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#90caf9",
    },
  },
  typography: {
    fontFamily: "Crimson Text",
  },
});

function App() {
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <Container maxWidth="md">
          <Header title="techrich"></Header>
          <MainFeaturedPost></MainFeaturedPost>
          <TestPost />
        </Container>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default App;
