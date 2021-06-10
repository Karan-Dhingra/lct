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
import  ScrollButton  from "./Components/Scroll";
// import scrollToTop from "./Components/scrollToTop";
// import { ScrollButton } from "./Components/ScrollButton"

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
        {/* <scrollToTop> */}
        <Switch>
          <Redirect from='/lct' to="/" />
          {/* <Redirect from='' to="/" /> */}
          <Route exact path="/" render={() => {
            return (
              <>
                <Home_First_Box />
                <Home_Content />
                <Footer />

              </>
            )
          }}>
          </Route>

          <Route exact path="/blog" render={() => {
            return (
              <>
                <Header/>
                <Blog/>
                <Footer />

              </>
            )
          }}>
          </Route>

          <Route exact path="/about" render={() => {
            return (
              <>
                <Header />
                <About />
                <Footer />

              </>
            )
          }}>
          </Route>

          <Route exact path="/contact" render={() => {
            return (
              <>
                <Header />
                <Contact />
                <Footer />

              </>
            )
          }}>
          </Route>

          <Route exact path="/blog/blog5">
            <Header />
            <Blog5 />
            <Footer />

          </Route>

          <Route exact path="/blog/blog4">
            <Header />
            <Blog4 />
            <Footer />

          </Route>

          <Route exact path="/blog/blog3">
            <Header />
            <Blog3 />
            <Footer />

          </Route>

          <Route exact path="/blog/blog2">
            <Header />
            <Blog2 />
            <Footer />

          </Route>

          <Route exact path="/blog/blog1">
            <Header />
            <Blog1 />
            <Footer />

          </Route>

          <Route render={() => {
            return (
              <>
                <Page_404/>
              </>
            )
          }}>
          </Route>

        </Switch>
        {/* </scrollToTop> */}
        <ScrollButton/>
      </Router>
    </>
  );
}

export default App;
