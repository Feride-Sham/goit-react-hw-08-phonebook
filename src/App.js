import React, { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import routes from "./routes";
import AppBar from "./components/AppBar/AppBar";
import { authOperations } from "./redux/auth";
import { PrivateRoute } from "./components/PrivateRoute";

import "./App.css";

const HomeView = lazy(() =>
  import("./views/HomeView.js" /* webpackChunkName: "home-view" */)
);
const ContactsView = lazy(() =>
  import("./views/ContactsView.js" /* webpackChunkName: "contacts-view" */)
);
const LoginView = lazy(() =>
  import("./views/LoginView.js" /* webpackChunkName: "login-view" */)
);
const RegistrationView = lazy(() =>
  import(
    "./views/RegistrationView.js" /* webpackChunkName: "registration-view" */
  )
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <div className="App">
          <AppBar />
          <Suspense fallback={<h1>Load..</h1>}>
            <Switch>
              <Route exact path={routes.home} component={HomeView} />
              <PrivateRoute
                path={routes.contacts}
                component={ContactsView}
                redirectTo={routes.login}
              />
              <Route path={routes.login} component={LoginView} />
              <Route path={routes.registration} component={RegistrationView} />
            </Switch>
          </Suspense>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
