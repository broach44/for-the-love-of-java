import React from 'react';

import userPrefenceData from '../../../helpers/data/userPreferenceData';
import authData from '../../../helpers/data/authData';
import './UserPreferences.scss';

class UserPreferences extends React.Component {
  state = {
    userPreferences: {},
  }

  getPreferences = () => {
    userPrefenceData.getPreferencesByUid(authData.getUid())
      .then((result) => {
        this.setState({ userPreferences: result[0] });
      })
      .catch((err) => console.error('errFromUserPrefence', err));
  }

  componentDidMount() {
    this.getPreferences();
  }

  render() {
    const { userPreferences } = this.state;
    return (
      <div className="userPreferences col-5 justify-center">
        <h1 className="mb-4">My Preferences</h1>
        <div className="col-12 text-left">
          {
            (userPreferences === undefined)
              ? <div className="text-center">
                  <h3>**New Features Coming Soon**</h3>
                  {/* <h3>You haven't created any preferences yet.  Would you like to do that now?</h3>
                  <button className="btn createPrefButton">Create My Preferences</button> */}
                </div>
              : <ul>
                <li>Preferred Time of Day to Visit a Shop:  {userPreferences.preferredTimeOfDay}</li>
                <li>Primary Reason for Visits:  {userPreferences.primaryVisitPurpose}</li>
                <li>Importance of Wifi:  {userPreferences.wifiImportanceRating}</li>
                <li>Importance of Drink Quality:  {userPreferences.drinkImportanceRating}</li>
                <li>Importance of Food Quality:  {userPreferences.foodImportanceRating}</li>
                <li>Importance on Pricing:  {userPreferences.pricingImportanceRating}</li>
                <li>Importance of Tech Usability:  {userPreferences.techImportanceRating}</li>
                <li>Importance of Environment:  {userPreferences.environmentImportanceRating}</li>
              </ul>
          }
        </div>
      </div>
    );
  }
}

export default UserPreferences;
