import React from 'react';
import './App.css';
import Share from "./components/share/share";
import { Hero } from "./components/hero/hero";
import Projects from "./components/projects/projects";
import Nav from "./components/navbar/nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Share />
        <Nav />
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route exact path="/mywork" component={Projects} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
