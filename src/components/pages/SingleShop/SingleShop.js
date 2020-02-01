import React from 'react';
import { Link } from 'react-router-dom';

import VisitLogs from '../../shared/VisitLogs/VisitLogs';

import coffeeShopData from '../../../helpers/data/coffeeShopData';
import userLogData from '../../../helpers/data/userLogData';

import './SingleShop.scss';
import authData from '../../../helpers/data/authData';

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
    userLogView: false,
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
    const averageScore = parseInt(scoreTotal / logs.length, 10);
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

  changeViewType = () => {
    if (this.state.userLogView) {
      this.setCurrentShop();
      this.setState({ userLogView: false });
    }
    if (!this.state.userLogView) {
      this.setUserLogs();
      this.setState({ userLogView: true });
    }
  }

  setUserLogs = () => {
    const { shopId } = this.props.match.params;
    userLogData.getLogsByShopId(shopId)
      .then((logs) => {
        const userLogs = logs.filter((log) => log.uid === authData.getUid());
        this.setState({ logs: userLogs });
      })
      .catch((err) => console.error('err from setUserLogs', err));
  }

  renderNumber = () => '75%'

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
      userLogView,
    } = this.state;
    return (
      <div className="SingleShop">
        <h1>{shop.name}</h1>
        {
          (logs.length > 0)
            ? <div className="row justify-content-center">
                  <h4 className="col-12">Total Average Rating: {currentTotalRating}</h4>
                  <div className="col-12"><p>{logs.length} User Reviews</p></div>
                  {/* <div className="progress">
                    <div className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: this.renderNumber() }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100">
                    </div>
                  </div> */}
                  <div className="card ratingCard">
                    <div className="card-header">
                      <h5>By Feature:</h5>
                    </div>
                    <div className="card-body">
                      <p>Tech Rating: {currentTechRating}</p>
                      <p>Drink Rating: {currentDrinkRating}</p>
                      <p>Food Rating: {currentFoodRating}</p>
                      <p>Environment Rating: {currentEnvironmentRating}</p>
                      <p>Pricing Rating: {currentPricingRating}</p>
                      <p>Wifi Rating: {currentWifiRating}</p>
                    </div>
                  </div>
                </div>
            : <div><h2>Not Yet Rated! Log and rate your visit now!</h2></div>
        }
        <Link className="btn logNewVisitBtn" to={`/shop/${shop.id}/log/new`}>+ Log Visit</Link>
        {
          (userLogView) ? <button className="btn logViewBtn" onClick={this.changeViewType}>View All Logs</button>
            : <button className="btn logViewBtn" onClick={this.changeViewType}>View My Logs Only</button>
        }
        {
          (userLogView && logs.length === 0) ? <h2>You have not reviewed this shop yet!  Click the button above to add a new visit.</h2>
            : <VisitLogs logs={logs} deleteEntry={this.deleteEntry} />
        }
      </div>
    );
  }
}

export default SingleShop;
