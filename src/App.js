import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link,Switch} from 'react-router-dom'
import AboutPage from './components/AboutPage.js'
import NotFoundPage from './components/NotFoundPage.js'

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to = "/about">about</Link></li>
            <li><Link to = "/users">users</Link></li>
            <li><Link to = "/news">about</Link></li>
          </ul>
        </nav>
        <hr/>
        <Switch>
          <Route path="/" exact component={()=><h1>home page</h1>}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/users" exact component={()=><h1>users page</h1>}></Route>
          <Route path="/news" exact component={()=><h1>news page</h1>}></Route>
          <Route component={NotFoundPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
