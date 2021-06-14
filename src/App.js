import React from 'react';
import './App.sass';
import './App.css'
import Header from './components/Header/Header';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ForgotPassword from './components/Auth/ForgotPassword';
import Search from './components/Search/Search';
import Profile from './components/Profile/Profile'
import Users from './components/Users/Users' 
import FollowedUsers from './components/Users/FollowedUsers' 
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <title>Orié</title>
        <Header />
        <br /><br />
        <Switch>
          <Route exact={true} path="/" component={Search} />
          <Route exact={true} path="/login" component={Login} />
          <Route exact={true} path="/signup" component={Signup} />
          <Route exact={true} path="/login/forgot-password" component={ForgotPassword} />
          <Route exact={true} path="/user/:id" component={Profile} />
          <Route exact={true} path="/user-search" component={Users} />
          <Route exact={true} path="/followedUsers" component={FollowedUsers} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;