import React, { Component } from 'react';
import './App.css';
import HomePage from './Pages/HomePage/HomePage.js';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './Pages/ShopPage/ShopPage';
import Header from './Components/Header/Header.js';
import Auth from './Pages/Auth/Auth';
import { auth } from './firebase/utils.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    })
  }
  

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={Auth} />
        </Switch>
      </div>
    )
  }
}

export default App;
