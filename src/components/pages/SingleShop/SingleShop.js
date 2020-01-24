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
      .then((logs) => this.setState({ logs }))
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

  render() {
    const { shop, logs } = this.state;
    return (
      <div className="SingleShop">
        <h1>Shop View</h1>
        <Link className="btn btn-success" to={`/shop/${shop.id}/log/new`}>+ Log Visit</Link>
        <VisitLogs logs={logs} deleteEntry={this.deleteEntry} />
      </div>
    );
  }
}

export default SingleShop;
