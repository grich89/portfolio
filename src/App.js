import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import PrimaryNav from './components/PrimaryNav/PrimaryNav.js';
import Footer from './components/Footer/Footer.js';
import Home from './pages/home/Home.js';
import About from './pages/about/About.js';
import Timeline from './pages/timeline/Timeline.js';
import Work from './pages/work/Work.js';
import logo from './images/logo.png';

import './App.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="global-header">
          <div className="container">
            <div className="global-header__logo">
              <Link to="/">
                <img
                  src={logo}
                  alt="Logo"
                />
              </Link>
            </div>

            <PrimaryNav />
          </div>
        </header>

        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Route
          render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/timeline" component={Timeline} />
                <Route exact path="/work" component={Work} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          )}
        />
      </div>

      <Footer />
    </Router>
  );
}

export default App;
