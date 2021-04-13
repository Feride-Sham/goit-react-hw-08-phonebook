import React, { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
// import HomeView from "./views/HomeView";
// import ContactsView from "./views/ContactsView";
// import LoginView from "./views/LoginView";
// import RegistrationView from "./views/RegistrationView";
import routes from "./routes";
import AppBar from "./components/AppBar/AppBar";
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
  render() {
    return (
      <>
        <div className="App">
          <AppBar />
          <Suspense fallback={<h1>Load..</h1>}>
            <Switch>
              <Route exact path={routes.home} component={HomeView} />
              <Route path={routes.contacts} component={ContactsView} />
              <Route path={routes.login} component={LoginView} />
              <Route path={routes.registration} component={RegistrationView} />
            </Switch>
          </Suspense>
        </div>
      </>
    );
  }
}

// const App = () => {
//   return (
//     <div className="App">
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <Filter />
//       <ContactList />
//     </div>
//   );
// };

export default App;
