// React
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Material UI Components
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

// techrich components
import Header from "./components/header";
import MainFeaturedPost from "./components/MainFeaturedPost";
import FeaturedPost from "./components/FeaturedPost";
import Footer from "./components/Footer";
import BlogPost from "./components/BlogPost";

// posts
import what_it_takes from "./posts/what-it-takes.md";
console.log(what_it_takes);

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

const mainFeaturedPost = {
  title: "Make more money.",
  description:
    "I made a career switch into software engineering when I was \
    already years into a completely different career. I want people to \
    know exactly what they need to do, WITHOUT putting up the TENS of \
    THOUSANDS of dollars that I did.",
};

const featuredPosts = [
  {
    title: "What It Takes",
    date: "Aug 24",
    description:
      "I went from being an envious wet-lab grunt to an egotistical \
    software engineer. I couldn’t believe how simple it was. I’ll tell you the \
    tactics here so you don’t have to waste years of your life in class.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
    link: "/what-it-takes",
  },
  {
    title: "Coming soon!",
    date: "",
    description: "",
    image: "https://source.unsplash.com/random",
  },
];

function App() {
  return (
    <React.Fragment>
      <Router>
        <MuiThemeProvider theme={theme}>
          <Container maxWidth="md">
            <Header title="techrich"></Header>
            <main>
              <Switch>
                <Route exact path="/">
                  <MainFeaturedPost post={mainFeaturedPost}></MainFeaturedPost>
                  <Grid container spacing={4}>
                    {featuredPosts.map((post) => (
                      <FeaturedPost key={post.title} post={post}></FeaturedPost>
                    ))}
                  </Grid>
                </Route>
                <Route path="/what-it-takes">
                  <BlogPost
                    title="What It Takes"
                    post={what_it_takes}
                  ></BlogPost>
                </Route>
              </Switch>
            </main>
          </Container>
          <Footer title="techrich" description="Make more money."></Footer>
        </MuiThemeProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
