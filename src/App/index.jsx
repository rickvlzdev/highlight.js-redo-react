/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './styles.less';
import Header from '#components/Header';
import Home from '#pages/Home';
import GettingStarted from '#pages/GettingStarted';
import Install from '#pages/Install';
import News from '#pages/News';
import Footer from '#components/Footer';


export default class App extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <Router>
        <div className={styles.container}>
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/static/projects/highlightjs-redo/" component={Home} />
              <Route exact path="/static/projects/highlightjs-redo/index.html" component={Home} />
              <Route path="/getting-started" component={GettingStarted} />
              <Route path="/install" component={Install} />
              <Route path="/news" component={News} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}
