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
        <h2>Navbar</h2>
        {
          (authed) && <button className="btn btn-outline-warning" onClick={this.logMeOut}>Logout</button>
        }
      </div>
    );
  }
}

export default MainNavbar;
