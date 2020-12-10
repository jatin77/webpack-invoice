import React from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Switch } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import "./App.scss";
import Login from "./components/auth/Login/index.jsx";
import Profile from "./pages/profile/index.jsx";
import Layout from "./components/Layout/index.jsx";
import { LOGIN, HOME, PROFILE } from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import Home from "./pages/home/Home.jsx";
import { selectCurrentUser } from "./redux/user/user.selector";

const App = ({ user }) => {
  return (
    <div className="theme-light">
      <Router>
        <Switch>
          <IsUserRedirect user={user} path={LOGIN} loggedInPath={HOME}>
            <Login />
          </IsUserRedirect>
          <Layout>
            <ProtectedRoute user={user} path={HOME} exact>
              <Home />
            </ProtectedRoute>
            <ProtectedRoute user={user} path={PROFILE}>
              <Profile />
            </ProtectedRoute>
          </Layout>
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
