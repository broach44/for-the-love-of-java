import React from 'react';
import { Link } from 'react-router-dom';

// import UserPreferences from '../../shared/UserPreferences/UserPreferences';

import authData from '../../../helpers/data/authData';
import userProfileData from '../../../helpers/data/userProfileData';

import './Profile.scss';

class Profile extends React.Component {
  state = {
    user: {},
  }

  componentDidMount() {
    const uid = authData.getUid();
    userProfileData.getProfileByUid(uid)
      .then((user) => {
        const newUser = user[0];
        this.setState({ user: newUser });
      })
      .catch((err) => console.error('err from get User Profile', err));
  }

  render() {
    const { user } = this.state;
    return (
      <div className="Profile">
        <div className="row justify-content-around">
        <div className="col-5">
          <h1 className="mb-3">My Profile Info</h1>
          <h3>Name: {user.firsName} {user.lastName}</h3>
          <h4>Location: {user.city}, {user.state}</h4>
        </div>
        {/* <UserPreferences user={user.uid} /> */}
        <Link className="btn creamBtn" to="/UserPreferenceForm">Click Here to Create Preferences</Link>
        </div>
      </div>
    );
  }
}

export default Profile;
