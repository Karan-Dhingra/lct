import './App.css';
import { HomeFirstBox } from "./Components/HomeFirstBox";
import { Footer } from "./Components/Footer";
import { HomeContent } from "./Components/HomeContent";
import { Header } from "./Components/Header";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Blog } from "./Components/Blog";
import { Blog5 } from "./Components/blog/Blog5";
import { Blog4 } from "./Components/blog/Blog4";
import { Blog3 } from "./Components/blog/Blog3";
import { Blog2 } from "./Components/blog/Blog2";
import { Blog1 } from "./Components/blog/Blog1";
import { Page404 } from "./Components/page/Page404";
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
        <Header/>
        <Switch>

          <Redirect from='/lct' to="/" />

          <Route exact path="/" >
                <HomeFirstBox />
                <HomeContent />
          </Route>

          <Route exact path="/blog" >
                <Blog/>
          </Route>

          <Route exact path="/about" >
                <About />
          </Route>

          <Route exact path="/contact">
                <Contact />
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

          <Route>
            <Page404/>
          </Route>

        </Switch>
        <ScrollButton/>
        <Footer />
      </Router>
    </>
  );
}

export default App;
