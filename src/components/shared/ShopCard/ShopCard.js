import React from 'react';
import { Link } from 'react-router-dom';

import shopShape from '../../../helpers/propz/shopShape';

import './ShopCard.scss';

class ShopCard extends React.Component {
  static propTypes = {
    shop: shopShape.shopShape,
  }

  render() {
    const { shop } = this.props;
    return (
      <div className="ShopCard col-4 m-1">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{shop.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{shop.address}</h6>
            <p className="card-text">{shop.city}, {shop.state}  {shop.zip}</p>
            <Link className="btn btn-success btn-sm" to={`/shop/${shop.id}`}>View Shop</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopCard;
