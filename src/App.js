import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from './pages/home/home';
import Login from './pages/login/login';

class App extends React.Component {
  render() {
    return (<BrowserRouter>
      <Switch>
        <Route path='/login' excat render={({ history, location, ...props }) => {
          return !this.props.currentUser ? <Login {...props}></Login> : <Redirect
            to={(location.state && location.state.from) || "/"}></Redirect>
        }}></Route>
        <Route render={({ history, location, ...props }) => {
          return !this.props.currentUser ? <Redirect
            to={{ pathname: "/login", state: { from: location } }} >
          </Redirect> :
            <Home />
        }}></Route>
      </Switch>
    </BrowserRouter >)
  }
}

App = connect((state, ownerProp) => {
  return { currentUser: state.currentUser }
})(App)

export default App;
