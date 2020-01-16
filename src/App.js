import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import  Converter  from './components/Converter/Converter';
import { NoMatch } from './components/NoMatch/NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import Quiz from './components/Quiz/Quiz';
import Login from './components/Login/Login';
import './App.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
        <NavigationBar />
        <Layout>
          <Switch>
            <Route exact path="/" component={ Home }></Route>
            <Route path="/about" component={ About }></Route>
            <Route path="/quiz" component={ Quiz }></Route>
            <Route path="/converter" component={ Converter }></Route>
            <Route path="/login" component={ Login }></Route>
            <Route component={ NoMatch }></Route>
          </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
