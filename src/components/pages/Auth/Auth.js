import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import PropTypes from 'prop-types';

import './Auth.scss';

class Auth extends React.Component {
    static propTypes = {
      authed: PropTypes.bool,
    }

    loginClickEvent = (e) => {
      e.preventDefault();
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    }

    render() {
      const { authed } = this.props;
      return (
          <div className="Auth mt-3">
            {
              (!authed) && <button className="btn btn-warning" onClick={this.loginClickEvent}>Login with Google</button>
            }
          </div>
      );
    }
}

export default Auth;
