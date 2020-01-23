import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import Auth from '../components/pages/Auth/Auth';
import Home from '../components/pages/Home/Home';
import Profile from '../components/pages/Profile/Profile';
import MainNavbar from '../components/shared/MainNavbar/MainNavbar';
import Shops from '../components/pages/Shops/Shops';
import ShopForm from '../components/pages/ShopForm/ShopForm';
import SingleShop from '../components/pages/SingleShop/SingleShop';
import VisitForm from '../components/pages/VisitForm/VisitForm';

import firebaseConnection from '../helpers/data/connection';

import './App.scss';

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <Router>
          <MainNavbar authed={authed} />
          <Switch>
            <PrivateRoute path="/" exact component={Home} authed={authed} />
            <PrivateRoute path="/profile" exact component={Profile} authed={authed} />
            <PrivateRoute path="/shops" exact component={Shops} authed={authed} />
            <PrivateRoute path="/shop/new" exact component={ShopForm} authed={authed} />
            <PrivateRoute path="/shop/:shopId" exact component={SingleShop} authed={authed} />
            <PrivateRoute path="/shop/:shopId/log/new" exact component={VisitForm} authed={authed} />
            <PrivateRoute path="/shop/:shopId/log/:logId/edit" exact component={VisitForm} authed={authed} />
            <PublicRoute path="/auth" exact component={Auth} authed={authed} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
