import React from 'react';

import './UserPreferenceForm.scss';
import authData from '../../../helpers/data/authData';
import userPreferenceData from '../../../helpers/data/userPreferenceData';

class UserPreferenceForm extends React.Component {
  state = {
    timeOfDayPreference: '',
    reasonForVisitPreference: '',
    wifiPreference: '',
    drinkPreferenceRating: '',
    foodPreferenceRating: '',
    pricingPreferenceRating: '',
    techPreferenceRating: '',
    environmentPreferenceRating: '',
  }

  saveTimeOfDayPreference = (e) => {
    e.preventDefault();
    this.setState({ timeOfDayPreference: e.target.value });
  }

  savePrimaryVisitPreference = (e) => {
    e.preventDefault();
    this.setState({ reasonForVisitPreference: e.target.value });
  }

  saveWifiPreference = (e) => {
    e.preventDefault();
    this.setState({ wifiPreference: e.target.value });
  }

  saveDrinkPreference = (e) => {
    e.preventDefault();
    this.setState({ drinkPreferenceRating: e.target.value });
  }

  saveFoodPreference = (e) => {
    e.preventDefault();
    this.setState({ foodPreferenceRating: e.target.value });
  }

  savePricingPreference = (e) => {
    e.preventDefault();
    this.setState({ pricingPreferenceRating: e.target.value });
  }

  saveTechPreference = (e) => {
    e.preventDefault();
    this.setState({ techPreferenceRating: e.target.value });
  }

  saveEnvironmentPreference = (e) => {
    e.preventDefault();
    this.setState({ environmentPreferenceRating: e.target.value });
  }

  createNewEntryObject = () => {
    const {
      timeOfDayPreference,
      reasonForVisitPreference,
      wifiPreference,
      drinkPreferenceRating,
      foodPreferenceRating,
      pricingPreferenceRating,
      techPreferenceRating,
      environmentPreferenceRating,
    } = this.state;
    const newEntry = {
      drinkImportanceRating: drinkPreferenceRating,
      environmentImportanceRating: environmentPreferenceRating,
      foodImportanceRating: foodPreferenceRating,
      preferredTimeOfDay: timeOfDayPreference,
      pricingImportanceRating: pricingPreferenceRating,
      primaryVisitPurpose: reasonForVisitPreference,
      techImportanceRating: techPreferenceRating,
      wifiImportanceRating: wifiPreference,
      uid: authData.getUid(),
    };
    return newEntry;
  }

  savePreferenceEvent = (e) => {
    userPreferenceData.savePreferences(this.createNewEntryObject())
      .then(() => this.props.history.push('/profile'))
      .catch((err) => console.error('err from save Pref Event', err));
  }

  render() {
    const {
      timeOfDayPreference,
      reasonForVisitPreference,
      wifiPreference,
      drinkPreferenceRating,
      foodPreferenceRating,
      pricingPreferenceRating,
      techPreferenceRating,
      environmentPreferenceRating,
    } = this.state;

    return (
      <div>
        <h1>User Preference Form</h1>
        <div className="row justify-content-around">
          <select id="drinkPreferenceSelection" className="form-control col-5" value={timeOfDayPreference} onChange={this.saveTimeOfDayPreference}>
            <option defaultValue>What time of day do you prefer to visit a coffee shop?</option>
            <option value="1">Morning</option>
            <option value="2">Afternoon</option>
            <option value="3">Evening</option>
          </select>
          <select id="reasonForVisitPreferenceSelection" className="form-control col-5" value={reasonForVisitPreference} onChange={this.savePrimaryVisitPreference}>
            <option defaultValue>Why do you visit shops?</option>
            <option value="1">Caffeinate, cafeinate, caffeinate!</option>
            <option value="2">Social Hour</option>
            <option value="3">Interviews/Conduct Business</option>
          </select>
        </div>
        <div className="row justify-content-around">
          <select id="wifiPreferenceSelection" className="form-control col-5" value={wifiPreference} onChange={this.saveWifiPreference}>
            <option defaultValue>How important is WiFi during your visits?</option>
            <option value="1">What's a WiFi?</option>
            <option value="2">It helps to post selfies faster.</option>
            <option value="3">Covenient</option>
          </select>
          <select id="drinkPreferenceSelection" className="form-control col-5" value={drinkPreferenceRating} onChange={this.saveDrinkPreference}>
            <option defaultValue>How important is the beverage selection?</option>
            <option value="1">They have coffee?</option>
            <option value="2">I like to at least have something to sip on.</option>
            <option value="3">Why bother if the drinks are terrible?</option>
          </select>
        </div>
        <div className="row justify-content-around">
          <select id="foodPreferenceSelection" className="form-control col-5" value={foodPreferenceRating} onChange={this.saveFoodPreference}>
            <option defaultValue>How important is food selection and quality?</option>
            <option value="1">I don't eat.</option>
            <option value="2">I like food.</option>
            <option value="3">Coffee is just a bonus.</option>
          </select>
          <select id="pricingPreferenceSelection" className="form-control col-5" value={pricingPreferenceRating} onChange={this.savePricingPreference}>
            <option defaultValue>How much do you like to spend at a coffee shop?</option>
            <option value="1">$1-$5</option>
            <option value="2">$5-$10</option>
            <option value="3">$10-$20</option>
          </select>
        </div>
        <div className="row justify-content-around">
          <select id="techPreferenceSelection" className="form-control col-5" value={techPreferenceRating} onChange={this.saveTechPreference}>
            <option defaultValue>How important is a good tech setup? Number of outlets, location of outlets, etc..</option>
            <option value="1">I only need fresh air and sunshine.</option>
            <option value="2">I do like to charge my phone up from time to time.</option>
            <option value="3">Outlets should be installed in every table.</option>
          </select>
          <select id="environmentPreferenceSelection" className="form-control col-5" value={environmentPreferenceRating} onChange={this.saveEnvironmentPreference}>
            <option defaultValue>What type of environment do you prefer?</option>
            <option value="1">Cozy with gentle hipster tunes.</option>
            <option value="2">Second office with a few private spaces</option>
            <option value="3">Social arena</option>
          </select>
        </div>
        <button className="btn submitButton" onClick={this.savePreferenceEvent}>Save Preferences</button>
      </div>
    );
  }
}

export default UserPreferenceForm;
