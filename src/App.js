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
            <li><Link to = "/news">news</Link></li>
          </ul>
        </nav>
        <hr/>
        <Switch>
          <Route path="/" exact component={()=><h1>home page</h1>}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/users/:userid" component={({match})=>{return <h1>hello user{match.params.userid}</h1>}}></Route>{/*cannot write before /users   param is a object 'props', to get userid need props.match.userid*/}
          <Route path="/users" component={()=><h1>users page</h1>}></Route>
          <Route path="/news" component={()=><h1>news page</h1>}></Route>
          <Route component={NotFoundPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
