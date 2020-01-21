import React from 'react';
import { Link } from 'react-router-dom';

import ShopCard from '../../shared/ShopCard/ShopCard';

import coffeeShopData from '../../../helpers/data/coffeeShopData';

import './Shops.scss';

class Shops extends React.Component {
  state = {
    coffeeShops: [],
  }

  getShops = () => {
    coffeeShopData.getCoffeeShops()
      .then((coffeeShops) => {
        this.setState({ coffeeShops });
      })
      .catch((err) => console.error('error from get shops', err));
  }

  componentDidMount() {
    this.getShops();
  }

  render() {
    const { coffeeShops } = this.state;
    return (
      <div className="Shops">
        <h1>Shops</h1>
        <Link className="btn btn-primary" to="/shop/new">Add New Shop</Link>
        <div className="row justify-content-center mt-3">
        {
          coffeeShops.map((shop) => <ShopCard key={shop.id} shop={shop} />)
        }
        </div>
      </div>
    );
  }
}

export default Shops;
