import React from 'react';

import userLogsData from '../../../helpers/data/userLogData';
import authData from '../../../helpers/data/authData';
import './VisitForm.scss';

class VisitForm extends React.Component {
  state = {
    newDate: '',
    newComments: '',
    newPurpose: '',
    newWouldRecommend: '',
    newEnvironmentRating: '',
    newDrinkRating: '',
    newFoodRating: '',
    newPricingRating: '',
    newTechRating: '',
    newWifiRating: '',
    newDrinksConsumed: '',
    newFoodConsumed: '',
  }

  createNewLogObj = () => {
    const { shopId } = this.props.match.params;
    const {
      newDate,
      newComments,
      newPurpose,
      newWouldRecommend,
      newEnvironmentRating,
      newDrinkRating,
      newFoodRating,
      newPricingRating,
      newTechRating,
      newWifiRating,
      newDrinksConsumed,
      newFoodConsumed,
    } = this.state;
    const newLogObj = {
      dateOfVisit: newDate,
      comments: newComments,
      purposeOfvisit: newPurpose,
      wouldRecommend: newWouldRecommend,
      environmentRating: newEnvironmentRating,
      drinkRating: newDrinkRating,
      foodRating: newFoodRating,
      pricingRating: newPricingRating,
      techRating: newTechRating,
      wifiRating: newWifiRating,
      drinksConsumed: newDrinksConsumed,
      foodConsumed: newFoodConsumed,
      uid: authData.getUid(),
      shopId,
    };
    return newLogObj;
  }

  addNewLog = (e) => {
    userLogsData.saveNewLog(this.createNewLogObj())
      .then(() => this.props.history.push('/shop/:shopId'))
      .catch((err) => console.error('err from new Log', err));
  }

  changeDate = (e) => {
    this.setState({ newDate: e.target.value });
  }

  changeComment = (e) => {
    this.setState({ newComments: e.target.value });
  }

  changePurpose = (e) => {
    this.setState({ newPurpose: e.target.value });
  }

  changeDrinksConsumed = (e) => {
    this.setState({ newDrinksConsumed: e.target.value });
  }

  changeFoodConsumed = (e) => {
    this.setState({ newFoodConsumed: e.target.value });
  }

  changeRecommendation = (e) => {
    this.setState({ newWouldRecommend: e.target.value });
  }

  changeEnvironmentRating = (e) => {
    this.setState({ newEnvironmentRating: e.target.value });
  }

  changeDrinkRating = (e) => {
    this.setState({ newDrinkRating: e.target.value });
  }

  changeFoodRating = (e) => {
    this.setState({ newFoodRating: e.target.value });
  }

  changePricingRating = (e) => {
    this.setState({ newPricingRating: e.target.value });
  }

  changeTechRating = (e) => {
    this.setState({ newTechRating: e.target.value });
  }

  changeWifiRating = (e) => {
    this.setState({ newWifiRating: e.target.value });
  }

  render() {
    const {
      newDate,
      newComments,
      newPurpose,
      newWouldRecommend,
      newEnvironmentRating,
      newDrinkRating,
      newFoodRating,
      newPricingRating,
      newTechRating,
      newWifiRating,
      newDrinksConsumed,
      newFoodConsumed,
    } = this.state;
    return (
      <div className="VisitForm">
        <h1>Log Visit Form</h1>
          <div className="form-group">
            <label for="dateOfVisit">Date of Visit</label>
            <input
              type="text"
              className="form-control"
              id="dateOfVisit"
              placeholder="1/1/2020"
              value={newDate}
              onChange={this.changeDate}
            />
          </div>
          <div className="form-group">
            <label for="comments">Comments</label>
            <input
              type="text"
              className="form-control"
              id="comments"
              placeholder="Add some comments about the visit"
              value={newComments}
              onChange={this.changeComment}
            />
          </div>
          <div className="form-group">
            <label for="purposeOfVisit">Purpose of Visit</label>
            <input
              type="text"
              className="form-control"
              id="purposeOfVisit"
              placeholder="What brought you in?"
              value={newPurpose}
              onChange={this.changePurpose}
            />
          </div>
          <div className="form-group">
            <label for="DrinksConsumed">Beverage enjoyed:</label>
            <input
              type="text"
              className="form-control"
              id="DrinksConsumed"
              placeholder="Did you grab a beverage? If so list which one..."
              value={newDrinksConsumed}
              onChange={this.changeDrinksConsumed}
            />
          </div>
          <div className="form-group">
            <label for="FoodConsumed">Food Enjoyed: </label>
            <input
              type="text"
              className="form-control"
              id="FoodConsumed"
              placeholder="Did you grab a bite to eat? If so list ..."
              value={newFoodConsumed}
              onChange={this.changeFoodConsumed}
            />
          </div>
          <div className="form-group">
            <label for="Recommendation">Recommendation: </label>
            <input
              type="text"
              className="form-control"
              id="Recommendation"
              placeholder="Would you recommend to others?"
              value={newWouldRecommend}
              onChange={this.changeRecommendation}
            />
          </div>
          <div className="form-group col-2">
            <label for="EnvironmentRating">Environment Rating: </label>
            <input
              type="number"
              className="form-control"
              id="EnvironmentRating"
              placeholder="Rate the environment on a scale of 1 to 5 (1 is worst, 5 is out of this world)"
              value={newEnvironmentRating}
              onChange={this.changeEnvironmentRating}
            />
          </div>
          <div className="form-group col-2">
            <label for="DrinkRating">Drink Rating: </label>
            <input
              type="number"
              className="form-control"
              id="DrinkRating"
              placeholder="Rate the drink on a scale of 1 to 5 (1 is worst, 5 is out of this world)"
              value={newDrinkRating}
              onChange={this.changeDrinkRating}
            />
          </div>
          <div className="form-group col-2">
            <label for="FoodRating">Food Rating: </label>
            <input
              type="number"
              className="form-control"
              id="FoodRating"
              placeholder="Rate the food on a scale of 1 to 5 (1 is worst, 5 is out of this world)"
              value={newFoodRating}
              onChange={this.changeFoodRating}
            />
          </div>
          <div className="form-group col-2">
            <label for="PricingRating">Pricing Rating: </label>
            <input
              type="number"
              className="form-control"
              id="PricingRating"
              placeholder="Rate the pricing on a scale of 1 to 5 (1 is worst, 5 is out of this world)"
              value={newPricingRating}
              onChange={this.changePricingRating}
            />
          </div>
          <div className="form-group col-2">
            <label for="TechRating">Tech Rating: </label>
            <input
              type="number"
              className="form-control"
              id="TechRating"
              placeholder="Rate the tech on a scale of 1 to 5 (1 is worst, 5 is out of this world)"
              value={newTechRating}
              onChange={this.changeTechRating}
            />
          </div>
          <div className="form-group col-2">
            <label for="WifiRating">Wifi Rating: </label>
            <input
              type="number"
              className="form-control"
              id="WifiRating"
              placeholder="Rate the WiFi on a scale of 1 to 5 (1 is worst, 5 is out of this world)"
              value={newWifiRating}
              onChange={this.changeWifiRating}
            />
          </div>
        <button className="btn btn-success" onClick={this.addNewLog}>Save New Entry</button>
      </div>
    );
  }
}

export default VisitForm;
