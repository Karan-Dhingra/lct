import './App.css';
import { Home_First_Box } from "./Components/Home_First_Box";
import { Footer } from "./Components/Footer";
import { Home_Content } from "./Components/Home_Content";
import { Header } from "./Components/Header";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Blog } from "./Components/Blog";
import { Blog5 } from "./Components/blog/Blog5";
import { Blog4 } from "./Components/blog/Blog4";
import { Blog3 } from "./Components/blog/Blog3";
import { Blog2 } from "./Components/blog/Blog2";
import { Blog1 } from "./Components/blog/Blog1";
import { Page_404 } from "./Components/page/Page_404";
import ScrollButton from "./Components/Scroll";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Redirect } from 'react-router';

function App() {
  return (
    <>
      <Router>
        <Header />
          <Switch>
            
            <Redirect from='/lct' to="/" />

            <Route exact path="/" render={() => {
              return (
                <>
                  <Home_First_Box />
                  <Home_Content />
                </>
              )
            }}>
            </Route>

            <Route exact path="/blog" render={() => {
              return (
                <>
                  <Blog />
                </>
              )
            }}>
            </Route>

            <Route exact path="/about" render={() => {
              return (
                <>
                  <About />
                </>
              )
            }}>
            </Route>

            <Route exact path="/contact" render={() => {
              return (
                <>
                  <Contact />
                </>
              )
            }}>
            </Route>

            <Route exact path="/blog/blog5">
              <Blog5 />
            </Route>

            <Route exact path="/blog/blog4">
              <Blog4 />
            </Route>

            <Route exact path="/blog/blog3">
              <Blog3 />
            </Route>

            <Route exact path="/blog/blog2">
              <Blog2 />
            </Route>

            <Route exact path="/blog/blog1">
              <Blog1 />
            </Route>

            <Route render={() => {
              return (
                <>
                  <Page_404 />
                </>
              )
            }}>
            </Route>

          </Switch>
        <ScrollButton />
        <Footer />
      </Router>
    </>
  );
}

export default App;
