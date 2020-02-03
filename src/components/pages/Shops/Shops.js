import React from 'react';
import { Link } from 'react-router-dom';

import ShopCard from '../../shared/ShopCard/ShopCard';
import YelpShopCard from '../../shared/YelpShopCard/YelpShopCard';

import coffeeShopData from '../../../helpers/data/coffeeShopData';
import yelpShops from '../../../helpers/data/yelpData';
import userProfileData from '../../../helpers/data/userProfileData';
import authData from '../../../helpers/data/authData';

import './Shops.scss';

class Shops extends React.Component {
  state = {
    coffeeShops: [],
    filteredShops: [],
    yelpShopResults: [],
    searchParams: '',
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

  getYelpMatch = () => {
    userProfileData.getProfileByUid(authData.getUid())
      .then((user) => {
        yelpShops.getYelpCoffeeShops(this.state.searchParams, `${user[0].zip}`).then((shops) => {
          this.setState({ yelpShopResults: shops.businesses });
          this.renderShopView();
        }).catch((err) => console.error('errFromYelpSearch', err));
      }).catch((err) => console.error('errFromUserProfile', err));
  }

  searchThroughShops = (e) => {
    e.preventDefault();
    const userInput = e.target.value.toLowerCase();
    this.setState({ searchParams: userInput });
    const { coffeeShops } = this.state;
    const newShopList = coffeeShops.filter((shop) => shop.name.toLowerCase().includes(userInput) || shop.address.toLowerCase().includes(userInput));
    this.setState({ filteredShops: newShopList });
  }

  renderShopView = () => {
    const { yelpShopResults, filteredShops } = this.state;
    if (yelpShopResults.length !== 0) {
      return (
        yelpShopResults.map((shop) => <YelpShopCard key={shop.id} shop={shop} getShops={this.getShops} reset={this.resetShops} saveShop={coffeeShopData.addNewShop} />)
      );
    }
    return (
      (filteredShops.length === 0)
        ? <div>
            <h3>Whoops, didn't find anything locally. Want us to dig a little deeper?</h3>
            <button className="btn yelpButtons" onClick={this.getYelpMatch}>Yes, I still need Caffeine</button>
            <button className="btn yelpButtons" onClick={this.getShops}>No, I will try again later</button>
          </div>
        : filteredShops.map((shop) => <ShopCard key={shop.id} shop={shop} />)
    );
  }

  resetShops = () => {
    this.setState({ yelpShopResults: [] });
    this.setState({ searchParams: '' });
  }

  render() {
    return (
      <div className="Shops">
        <div className="shopHeader">
        <h1>Shops</h1>
        <Link className="btn addShopBtn" to="/shop/new">+ Add New Shop</Link>
        <form className="row justify-content-center">
          <div className="form-group m-3 col-6">
            <input type="search" aria-label="Search" className="form-control searchInput" id="SearchShopInput" placeholder="Search through shops..." onChange={this.searchThroughShops} />
            <small>Enter the name of shop or address of shop you are looking for.</small>
          </div>
        </form>
        </div>
        <div className="row justify-content-center mt-3">
        {this.renderShopView()}
        </div>
      </div>
    );
  }
}

export default Shops;
