import React from 'react';
import PropTypes from 'prop-types';

import './YelpShopCard.scss';

class ShopCard extends React.Component {
  static propTypes = {
    shop: PropTypes.object,
    saveShop: PropTypes.func,
    getShops: PropTypes.func,
    reset: PropTypes.func,
  }

  saveShop = (e) => {
    e.preventDefault();
    const {
      shop,
      saveShop,
      getShops,
      reset,
    } = this.props;
    const newShop = {
      name: shop.name,
      address: shop.location.address1,
      city: shop.location.city,
      state: shop.location.state,
      zip: shop.location.zip_code,
    };
    saveShop(newShop)
      .then(() => {
        getShops();
        reset();
      })
      .catch((err) => console.error('errFromSave', err));
  }

  render() {
    const { shop } = this.props;
    return (
      <div className="YelpShopCard col-4 m-1">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{shop.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{shop.location.address1}</h6>
            <p className="card-text">{shop.location.city}, {shop.location.state}  {shop.location.zip_code}</p>
            <button className="btn btn-success btn-sm" onClick={this.saveShop}>Save Shop</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopCard;
