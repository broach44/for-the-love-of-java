import React from 'react';

import './UserPreferenceForm.scss';

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
          <p className="text-left col-5">Some random explanatory text</p>
          <p className="text-left col-5">Some more explanatory text</p>
        </div>
        <div className="row justify-content-around">
          <select id="drinkPreferenceSelection" className="form-control col-5" value={timeOfDayPreference} onChange={this.saveTimeOfDayPreference}>
            <option defaultValue>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select id="reasonForVisitPreferenceSelection" className="form-control col-5" value={reasonForVisitPreference} onChange={this.savePrimaryVisitPreference}>
            <option defaultValue>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="row justify-content-around">
          <p className="text-left col-5">Some random explanatory text</p>
          <p className="text-left col-5">Some more explanatory text</p>
        </div>
        <div className="row justify-content-around">
          <select id="wifiPreferenceSelection" className="form-control col-5" value={wifiPreference} onChange={this.saveWifiPreference}>
            <option defaultValue>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select id="drinkPreferenceSelection" className="form-control col-5" value={drinkPreferenceRating} onChange={this.saveDrinkPreference}>
            <option defaultValue>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="row justify-content-around">
          <p className="text-left col-5">Some random explanatory text</p>
          <p className="text-left col-5">Some more explanatory text</p>
        </div>
        <div className="row justify-content-around">
          <select id="foodPreferenceSelection" className="form-control col-5" value={foodPreferenceRating} onChange={this.saveFoodPreference}>
            <option defaultValue>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select id="pricingPreferenceSelection" className="form-control col-5" value={pricingPreferenceRating} onChange={this.savePricingPreference}>
            <option defaultValue>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="row justify-content-around">
          <p className="text-left col-5">Some random explanatory text</p>
          <p className="text-left col-5">Some more explanatory text</p>
        </div>
        <div className="row justify-content-around">
          <select id="techPreferenceSelection" className="form-control col-5" value={techPreferenceRating} onChange={this.saveTechPreference}>
            <option defaultValue>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select id="environmentPreferenceSelection" className="form-control col-5" value={environmentPreferenceRating} onChange={this.saveEnvironmentPreference}>
            <option defaultValue>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    );
  }
}

export default UserPreferenceForm;
