import React from 'react';
import { Link } from 'react-router-dom';
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
        <nav className="navbar navbar-expand-lg">
          <span className="navbar-brand h1">For the Love of Java</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="navbar-nav ml-4 mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shops">Shops</Link>
            </li>
          </ul>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {
              (authed) && <button className="btn btn-outline-light ml-auto logoutButton" onClick={this.logMeOut}>Logout</button>
            }
          </div>
        </nav>
      </div>
    );
  }
}

export default MainNavbar;
