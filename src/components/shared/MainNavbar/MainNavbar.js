import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import PropTypes from 'prop-types';

import './MainNavbar.scss';

class MainNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;

    return (
      <div className="MainNavbar">


        <nav className="navbar navbar-expand-lg navbar-dark">
          <h1 className="navbar-brand">For the Love of Java</h1>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {
              (authed) && <button className="btn btn-danger" onClick={this.logMeOut}>Logout</button>
            }
          </div>
        </nav>
      </div>
    );
  }
}

export default MainNavbar;
