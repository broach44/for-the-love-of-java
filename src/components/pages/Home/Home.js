import React from 'react';

import authData from '../../../helpers/data/authData';
import userProfileData from '../../../helpers/data/userProfileData';

import './Home.scss';
import ModalExample from '../../shared/Modal/Modal';

class Home extends React.Component {
  state = {
    user: {},
  }

  componentDidMount() {
    const uid = authData.getUid();
    userProfileData.getProfileByUid(uid)
      .then((user) => {
        if (user.length > 0) {
          const newUser = user[0];
          this.setState({ user: newUser });
        }
      })
      .catch((err) => console.error('err from get User Profile', err));
  }

  render() {
    const { user } = this.state;
    return (
      <div className="Home">
        <h1>Home</h1>
        {
          (user.uid === authData.getUid()) ? <h1>There is a profile!!</h1>
            : <ModalExample />
        }
      </div>
    );
  }
}

export default Home;
