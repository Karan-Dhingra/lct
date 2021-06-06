import './App.css';
import { Home_First_Box } from "./Components/Home_First_Box";
import { Footer } from "./Components/Footer";
import { Home_Content } from "./Components/Home_Content";
import { Header } from "./Components/Header";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Blog } from "./Components/Blog";
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
        </Switch>

        <Switch>
          <Route exact path="/blog">
            <Header />
            <Blog />
          </Route>

          <Route exact path="/about">
            <Header />
            <About />
          </Route>

          <Route exact path="/contact">
            <Header />
            <Contact />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
