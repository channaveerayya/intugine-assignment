import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import * as ACTIONS from './store/actions/index'
import Layout from "./hoc/Layout/Layout";

import asyncComponent from './hoc/asyncComponent/asyncComponent';

const asyncLogin = asyncComponent(() => {
  return import("./container/login");
});
const asyncDashboard = asyncComponent(() => {
  return import("./container/dashboard");
});
class App extends Component {
  componentDidMount() {
    this.props.onTryAutoLogin();
  } render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={asyncLogin} />
      </Switch>
    );

    if (this.props.login.name) {
      routes = (
        <Switch>
          <Route path="/" exact component={asyncDashboard} />
        </Switch>
      );
    }

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    login: state.login
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onTryAutoLogin: () => dispatch(ACTIONS.login())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(App));
