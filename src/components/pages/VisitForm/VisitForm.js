import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

import userLogsData from '../../../helpers/data/userLogData';
import coffeeShopData from '../../../helpers/data/coffeeShopData';
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
    shop: {},
  }

  componentDidMount() {
    const { logId, shopId } = this.props.match.params;
    if (logId) {
      userLogsData.getSingleLog(logId)
        .then((response) => {
          const log = response.data;
          this.setState({
            newDate: log.dateOfVisit,
            newComments: log.comments,
            newPurpose: log.purposeOfVisit,
            newWouldRecommend: log.wouldRecommend,
            newEnvironmentRating: log.environmentRating,
            newDrinkRating: log.drinkRating,
            newFoodRating: log.foodRating,
            newPricingRating: log.pricingRating,
            newTechRating: log.techRating,
            newWifiRating: log.wifiRating,
            newDrinksConsumed: log.drinksConsumed,
            newFoodConsumed: log.foodConsumed,
          });
        })
        .catch((err) => console.error('err from get single log', err));
    }
    coffeeShopData.getSingleShop(shopId)
      .then((request) => {
        const shop = request.data;
        this.setState({ shop });
      })
      .catch((err) => console.error('errFromSingleShop', err));
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
      purposeOfVisit: newPurpose,
      wouldRecommend: Boolean(newWouldRecommend),
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
    e.preventDefault();
    const { shopId } = this.props.match.params;
    userLogsData.saveNewLog(this.createNewLogObj())
      .then(() => this.props.history.push(`/shop/${shopId}`))
      .catch((err) => console.error('err from new Log', err));
  }

  updateLogEvent = (e) => {
    e.preventDefault();
    const { shopId, logId } = this.props.match.params;
    userLogsData.updateLog(logId, this.createNewLogObj())
      .then(() => this.props.history.push(`/shop/${shopId}`))
      .catch((err) => console.error('err from new Log', err));
  }

  handleSubmit = (e) => {
    const { logId } = this.props.match.params;
    if (logId) {
      this.updateLogEvent(e);
    } else {
      this.addNewLog(e);
    }
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
    const num = parseInt(e.target.value, 10);
    this.setState({ newEnvironmentRating: num });
  }

  changeDrinkRating = (e) => {
    const num = parseInt(e.target.value, 10);
    this.setState({ newDrinkRating: num });
  }

  changeFoodRating = (e) => {
    const num = parseInt(e.target.value, 10);
    this.setState({ newFoodRating: num });
  }

  changePricingRating = (e) => {
    const num = parseInt(e.target.value, 10);
    this.setState({ newPricingRating: num });
  }

  changeTechRating = (e) => {
    const num = parseInt(e.target.value, 10);
    this.setState({ newTechRating: num });
  }

  changeWifiRating = (e) => {
    const num = parseInt(e.target.value, 10);
    this.setState({ newWifiRating: num });
  }

  goBack = (e) => {
    e.preventDefault();
    const { shopId } = this.props.match.params;
    this.props.history.push(`/shop/${shopId}`);
  }


  render() {
    const {
      newDate,
      newComments,
      newPurpose,
      newEnvironmentRating,
      newDrinkRating,
      newFoodRating,
      newPricingRating,
      newTechRating,
      newWifiRating,
      newDrinksConsumed,
      newFoodConsumed,
      shop,
    } = this.state;
    const { logId } = this.props.match.params;

    return (
      <div className="VisitForm">
        <h1>Log Visit for {shop.name}</h1>
        <p>Fill out all of the fields below and click save to record your visit to the shop.</p>
        <form className="container w-85 justify-content-center" onSubmit={this.handleSubmit}>
          <div className="row">
          <div className="form-group col-2">
            <label htmlFor="dateOfVisit">Date of Visit</label>
            <input
              type="date"
              className="form-control"
              id="dateOfVisit"
              value={newDate}
              onChange={this.changeDate}
              required
            />
          </div>
          <div className="form-group col-6">
            <label htmlFor="purposeOfVisit">Purpose of Visit</label>
            <input
              type="text"
              className="form-control"
              id="purposeOfVisit"
              placeholder="What brought you in?"
              value={newPurpose}
              onChange={this.changePurpose}
              required
            />
          </div>
          </div>
          <div className="form-group">
            <label htmlFor="comments">Comments</label>
            <input
              type="text"
              className="form-control"
              id="comments"
              placeholder="Add some comments about the visit"
              value={newComments}
              onChange={this.changeComment}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="DrinksConsumed">Beverage enjoyed:</label>
            <input
              type="text"
              className="form-control"
              id="DrinksConsumed"
              placeholder="Did you grab a beverage? If so list which one..."
              value={newDrinksConsumed}
              onChange={this.changeDrinksConsumed}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="FoodConsumed">Food Enjoyed: </label>
            <input
              type="text"
              className="form-control"
              id="FoodConsumed"
              placeholder="Did you grab a bite to eat? If so list ..."
              value={newFoodConsumed}
              onChange={this.changeFoodConsumed}
              required
            />
          </div>

          <legend>Radio Buttons</legend>
        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              name="recommendationRadio"
              value="true"
              onChange={this.changeRecommendation}
              required
              />{' '}
            Definitely would recommend
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              name="recommendationRadio"
              value="false"
              onChange={this.changeRecommendation}
              required
              />{' '}
            No I would not recommend
          </Label>
        </FormGroup>
        <div className="row">
          <div className="col-12 mt-3 justify-content-center">
            <p>
              Rate the shop on the various different categories you might look for in a coffee shop.
              Rating should be between 0 through 5.  A rating of 5 would mean "best thing since sliced bread",
              whereas 1 would be absolutely aweful.  Enter a "0" if you did not experience/use a particular
              aspect of the shops amenities.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="form-group col">
            <label htmlFor="EnvironmentRating">Environment Rating: </label>
            <input
              type="number"
              className="form-control"
              id="EnvironmentRating"
              placeholder="Enter number 0-5"
              min="0"
              max="5"
              value={newEnvironmentRating}
              onChange={this.changeEnvironmentRating}
              required
            />
          </div>
          <div className="form-group col">
            <label htmlFor="DrinkRating">Drink Rating: </label>
            <input
              type="number"
              className="form-control"
              id="DrinkRating"
              placeholder="Enter number 0-5"
              min="0"
              max="5"
              value={newDrinkRating}
              onChange={this.changeDrinkRating}
              required
            />
            <label htmlFor="FoodRating">Food Rating: </label>
            <input
              type="number"
              className="form-control"
              id="FoodRating"
              placeholder="Enter number 0-5"
              min="0"
              max="5"
              value={newFoodRating}
              onChange={this.changeFoodRating}
              required
            />
          </div>
          <div className="form-group col">
            <label htmlFor="PricingRating">Pricing Rating: </label>
            <input
              type="number"
              className="form-control"
              id="PricingRating"
              placeholder="Enter number 0-5"
              min="0"
              max="5"
              value={newPricingRating}
              onChange={this.changePricingRating}
              required
            />
          </div>
          <div className="form-group col">
            <label htmlFor="TechRating">Tech Rating: </label>
            <input
              type="number"
              className="form-control"
              id="TechRating"
              placeholder="Enter number 0-5"
              min="0"
              max="5"
              value={newTechRating}
              onChange={this.changeTechRating}
              required
            />
          </div>
          <div className="form-group col">
            <label htmlFor="WifiRating">Wifi Rating: </label>
            <input
              type="number"
              className="form-control"
              id="WifiRating"
              placeholder="Enter number 0-5"
              min="0"
              max="5"
              value={newWifiRating}
              onChange={this.changeWifiRating}
              required
            />
            </div>
          </div>
        { (logId) ? <button type="submit" className="btn">Save Changes</button>
          : <button type="submit" className="btn">Save New Entry</button>
        }
        <button type="button" className="btn ml-3" onClick={this.goBack}>Cancel</button>
        </form>
        <div className="formContainer"></div>
      </div>
    );
  }
}

export default VisitForm;
