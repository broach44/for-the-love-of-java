import React from 'react';
import { Link } from 'react-router-dom';

import VisitLogs from '../../shared/VisitLogs/VisitLogs';

import coffeeShopData from '../../../helpers/data/coffeeShopData';

import './SingleShop.scss';

class SingleShop extends React.Component {
  state = {
    shop: {},
  }

  // Function below brings back the single Shop Information and sets to state
  setCurrentShop = () => {
    const { shopId } = this.props.match.params;
    coffeeShopData.getSingleShop(shopId)
      .then((request) => {
        const shop = request.data;
        shop.id = shopId;
        this.setState({ shop });
      })
      .catch((err) => console.error('err from getsingleShop', err));
  }

  componentDidMount() {
    this.setCurrentShop();
  }

  render() {
    const { shop } = this.state;
    return (
      <div className="SingleShop">
        <h1>{shop.name}</h1>
        <Link className="btn btn-success" to={`/shop/${shop.id}/log/new`}>+ Log Visit</Link>
        <VisitLogs shop={shop} />
      </div>
    );
  }
}

export default SingleShop;
