import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

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
        <div>
          <Jumbotron className="HomeJumbotron" fluid>
            <Container fluid>
              <h1 className="display-3">Welcome {user.firsName}!</h1>
              <p className="lead w-75 text-center mx-auto">We know if you have found us then you love coffee just as much as we do!
              Browse through our ever growing database of coffee shops and see what suits your caffeinated ways!</p>
              {
                (user.uid === authData.getUid()) ? <Link className="btn btn-light startButton" to="/shops">Let's Get Started!</Link>
                  : <ModalExample />
              }
            </Container>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default Home;
