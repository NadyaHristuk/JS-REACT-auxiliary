import React, { Component } from 'react';
import Header from './Header/Header';
import {Switch, Route} from 'react-router-dom';
import Roadster from './Roadster/Roadster';
import ModelS from './ModelS/ModelS';
import ModelX from './ModelX/ModelX';
import User from './User/User';
import './App.css';

class App extends Component {
  state = {
    user: {}
  }
  fetchData = () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => this.setState({
      user: data.results[0],
    }))
    .catch(err => console.log(err))
  }
  componentDidMount() {
    this.fetchData();
  }
  render() {
    const {user} = this.state;
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Roadster}/>
          <Route path='/modelS' component={ModelS}/>
          <Route path='/modelX' component={ModelX}/>
          <Route path='/user' render= {props => <User userData = {user} {...props}/>}/>
        </Switch>
      </div>
        );
  }
}

export default App;
