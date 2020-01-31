import React from 'react';
import { Link } from 'react-router-dom';

import ShopCard from '../../shared/ShopCard/ShopCard';

import coffeeShopData from '../../../helpers/data/coffeeShopData';

import './Shops.scss';

class Shops extends React.Component {
  state = {
    coffeeShops: [],
    filteredShops: [],
  }

  getShops = () => {
    coffeeShopData.getCoffeeShops()
      .then((coffeeShops) => {
        this.setState({ coffeeShops, filteredShops: coffeeShops });
      })
      .catch((err) => console.error('error from get shops', err));
  }

  componentDidMount() {
    this.getShops();
  }

  searchThroughShops = (e) => {
    e.preventDefault();
    const userInput = e.target.value.toLowerCase();
    const { coffeeShops } = this.state;
    const newShopList = coffeeShops.filter((shop) => shop.name.toLowerCase().includes(userInput) || shop.address.toLowerCase().includes(userInput));
    this.setState({ filteredShops: newShopList });
  }

  render() {
    const { filteredShops } = this.state;
    return (
      <div className="Shops">
        <div className="shopHeader">
        <h1>Shops</h1>
        <Link className="btn btn-primary" to="/shop/new">Add New Shop</Link>
        <form className="row justify-content-center">
          <div className="form-group m-3 col-6">
            <input type="search" aria-label="Search" className="form-control" id="SearchShopInput" placeholder="Search through shops..." onChange={this.searchThroughShops} />
            <small>Enter the name of shop or address of shop you are looking for.</small>
          </div>
        </form>
        </div>
        <div className="row justify-content-center mt-3">
        {
          (filteredShops.length === 0) ? <h3>No results found</h3> : filteredShops.map((shop) => <ShopCard key={shop.id} shop={shop} />)
        }
        </div>
      </div>
    );
  }
}

export default Shops;
