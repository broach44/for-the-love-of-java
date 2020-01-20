import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import Auth from '../components/pages/Auth/Auth';
import MainNavbar from '../components/shared/MainNavbar/MainNavbar';

import firebaseConnection from '../helpers/data/connection';

import './App.scss';

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
        <MainNavbar authed={authed} />
       <h1 className="mt-3">Front-End Capstone Project</h1>
        <Auth authed={authed} />
      </div>
    );
  }
}

export default App;
