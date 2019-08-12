import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from './pages/home/home';
import Login from './pages/login/login';

class App extends React.Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (<BrowserRouter>
      <Switch>
        <Route path='/login' excat component={Login}></Route>
        <Route render={({ history , location,...props}) => {
          console.log(history, props);
          return !this.props.currentUser ? <Redirect
            to={{ pathname: "/login", state: { from: location } }} >
          </Redirect> :
            <Route
              path="/"
              component={Home}>
            </Route>
        }}></Route>
      </Switch>
    </BrowserRouter >)
  }
}

App = connect((state, ownerProp) => {
  return { currentUser: state.currentUser }
})(App)

export default App;
