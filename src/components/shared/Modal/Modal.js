import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';

import authData from '../../../helpers/data/authData';
import userProfileData from '../../../helpers/data/userProfileData';

import './Modal.scss';

class ModalExample extends React.Component {
    state = {
      modal: true,
      newFirsName: '',
      newLastName: '',
      newCity: '',
      newState: '',
      newZip: '',
    };

    toggle = () => {
      this.setState({
        modal: !this.state.modal,
      });
    }

    addNewUser = (e) => {
      e.preventDefault();
      const newUser = this.createUser();
      userProfileData.saveNewUser(newUser)
        .then(() => {
          this.toggle();
          window.location.reload();
        })
        .catch((err) => console.error('err from create user', err));
    }

    createUser = () => {
      const {
        newFirsName,
        newLastName,
        newCity,
        newState,
        newZip,
      } = this.state;
      const uid = authData.getUid();
      const userObject = {
        firsName: newFirsName,
        lastName: newLastName,
        city: newCity,
        state: newState,
        zip: newZip,
        uid,
      };
      return userObject;
    }

    changeFirsName = (e) => {
      this.setState({ newFirsName: e.target.value });
    }

    changeLastName = (e) => {
      this.setState({ newLastName: e.target.value });
    }

    changeCity = (e) => {
      this.setState({ newCity: e.target.value });
    }

    changeState = (e) => {
      this.setState({ newState: e.target.value });
    }

    changeZip = (e) => {
      this.setState({ newZip: e.target.value });
    }

    render() {
      const {
        newFirsName,
        newLastName,
        newCity,
        newState,
        newZip,
      } = this.state;
      return (
        <div>
          <Modal isOpen={this.state.modal}>
            <ModalHeader className="ModalFormBody">Let's Get Started!</ModalHeader>
            <ModalBody className="ModalFormBody">
              <h6>Fill out the form below to create your user profile.</h6>
              <form className="modalForm m-1" onSubmit={this.addNewUser}>
                <div className="form-group">
                  <label htmlFor="userFirstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="userFirstName"
                    placeholder=""
                    value={newFirsName}
                    onChange={this.changeFirsName}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="userLastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="userLastName"
                    placeholder=""
                    value={newLastName}
                    onChange={this.changeLastName}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="userCity">City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="userCity"
                    placeholder=""
                    value={newCity}
                    onChange={this.changeCity}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="userState">State</label>
                  <input
                    type="text"
                    className="form-control"
                    id="userState"
                    placeholder=""
                    value={newState}
                    onChange={this.changeState}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="userZip">Zip</label>
                  <input
                    type="text"
                    className="form-control"
                    id="userZip"
                    placeholder="5 or 9 digit zip"
                    pattern="\d{5}-?(\d{4})?"
                    value={newZip}
                    onChange={this.changeZip}
                    required
                  />
                </div>
              <Button type="submit" className="createProfileBtn">Create Profile</Button>{' '}
            </form>
            </ModalBody>
          </Modal>
        </div>
      );
    }
}

export default ModalExample;
