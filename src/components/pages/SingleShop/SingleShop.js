import React from 'react';
import { Link } from 'react-router-dom';

import VisitLogs from '../../shared/VisitLogs/VisitLogs';

import coffeeShopData from '../../../helpers/data/coffeeShopData';
import userLogData from '../../../helpers/data/userLogData';

import './SingleShop.scss';

class SingleShop extends React.Component {
  state = {
    shop: {},
    logs: [],
    currentTechRating: '',
    currentDrinkRating: '',
    currentFoodRating: '',
    currentEnvironmentRating: '',
    currentWifiRating: '',
    currentPricingRating: '',
    currentTotalRating: '',
  }

  // Function below brings back the single Shop Information and sets to state
  setCurrentShop = () => {
    const { shopId } = this.props.match.params;
    coffeeShopData.getSingleShop(shopId)
      .then((request) => {
        const shop = request.data;
        shop.id = shopId;
        this.setState({ shop });
        this.getLogs(shop.id);
      })
      .catch((err) => console.error('err from getsingleShop', err));
  }

  getLogs = (shopId) => {
    userLogData.getLogsByShopId(shopId)
      .then((logs) => {
        this.setState({ logs });
        if (logs.length > 0) {
          this.gatherShopRatings(logs);
        }
      })
      .catch((err) => console.error('err from getLogs', err));
  }

  componentDidMount() {
    this.setCurrentShop();
  }

  deleteEntry = (logId) => {
    const { shop } = this.state;
    userLogData.deleteLogEntry(logId)
      .then(() => this.getLogs(shop.id))
      .catch((err) => console.error('err from delete Log', err));
  }

  addScores = (runningTotal, score) => runningTotal + score;

  totalAverageRating = () => {
    const {
      currentTechRating,
      currentDrinkRating,
      currentFoodRating,
      currentEnvironmentRating,
      currentWifiRating,
      currentPricingRating,
    } = this.state;
    const totalScores = currentDrinkRating + currentEnvironmentRating + currentFoodRating + currentPricingRating + currentWifiRating + currentTechRating;
    const averageScore = totalScores / 6;
    this.setState({ currentTotalRating: averageScore });
  }

  averageTechRating = (logs) => {
    const techScores = logs.map((log) => log.techRating);
    const scoreTotal = techScores.reduce(this.addScores, 0);
    const averageScore = scoreTotal / logs.length;
    this.setState({ currentTechRating: averageScore });
  }

  averageDrinkRating = (logs) => {
    const drinkScores = logs.map((log) => log.drinkRating);
    const scoreTotal = drinkScores.reduce(this.addScores, 0);
    const averageScore = scoreTotal / logs.length;
    this.setState({ currentDrinkRating: averageScore });
  }

  averageFoodRating = (logs) => {
    const foodScores = logs.map((log) => log.foodRating);
    const scoreTotal = foodScores.reduce(this.addScores, 0);
    const averageScore = scoreTotal / logs.length;
    this.setState({ currentFoodRating: averageScore });
  }

  averageEnvironmentRating = (logs) => {
    const environmentScores = logs.map((log) => log.environmentRating);
    const scoreTotal = environmentScores.reduce(this.addScores, 0);
    const averageScore = scoreTotal / logs.length;
    this.setState({ currentEnvironmentRating: averageScore });
  }

  averagePricingRating = (logs) => {
    const pricingScores = logs.map((log) => log.pricingRating);
    const scoreTotal = pricingScores.reduce(this.addScores, 0);
    const averageScore = scoreTotal / logs.length;
    this.setState({ currentPricingRating: averageScore });
  }

  averageWifiRating = (logs) => {
    const wifiScores = logs.map((log) => log.wifiRating);
    const scoreTotal = wifiScores.reduce(this.addScores, 0);
    const averageScore = scoreTotal / logs.length;
    this.setState({ currentWifiRating: averageScore });
  }

  gatherShopRatings = (logs) => {
    this.averageTechRating(logs);
    this.averageDrinkRating(logs);
    this.averageFoodRating(logs);
    this.averageEnvironmentRating(logs);
    this.averagePricingRating(logs);
    this.averageWifiRating(logs);
    this.totalAverageRating();
  }

  render() {
    const {
      shop,
      logs,
      currentTechRating,
      currentDrinkRating,
      currentFoodRating,
      currentEnvironmentRating,
      currentPricingRating,
      currentWifiRating,
      currentTotalRating,
    } = this.state;
    return (
      <div className="SingleShop">
        <h1>Shop View</h1>
        {
          (logs.length > 0)
            ? <div>
                <h2>Average Ratings:</h2>
                <div className="row justify-content-center">
        <h4 className="col-12">Total Average Rating: {currentTotalRating}</h4>
                  <h4 className="col-3">Tech Rating: {currentTechRating}</h4>
                  <h4 className="col-3">Drink Rating: {currentDrinkRating}</h4>
                  <h4 className="col-3">Food Rating: {currentFoodRating}</h4>
                  <h4 className="col-3">Environment Rating: {currentEnvironmentRating}</h4>
                  <h4 className="col-3">Pricing Rating: {currentPricingRating}</h4>
                  <h4 className="col-3">Wifi Rating: {currentWifiRating}</h4>
                </div>
              </div>
            : <div><h2>Average Ratings: Not Yet Rated</h2></div>
        }
        <Link className="btn btn-success" to={`/shop/${shop.id}/log/new`}>+ Log Visit</Link>
        <VisitLogs logs={logs} deleteEntry={this.deleteEntry} />
      </div>
    );
  }
}

export default SingleShop;
