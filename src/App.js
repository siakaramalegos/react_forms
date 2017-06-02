import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import BasicControlledForm from './components/BasicControlledForm'
import UncontrolledSerialized from './components/UncontrolledSerialized'

const Home = () => <p>Select a form type to get started.</p>

const Main = () => (
  <div className="App-intro">
    <Link to="/controlled">Controlled + onChange handlers</Link><br />
    <Link to="/uncontrolled_refs">Uncontrolled + refs</Link><br />
    <Link to="/uncontrolled_serialized">Uncontrolled + serialization</Link><br />

    <Route exact path="/" component={Home} />
    <Route path="/controlled" component={BasicControlledForm} />
    <Route path="/uncontrolled_refs" component={BasicControlledForm} />
    <Route path="/uncontrolled_serialized" component={UncontrolledSerialized} />
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Form Data Options in React</h2>
          </div>
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
