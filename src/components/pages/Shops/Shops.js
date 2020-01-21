import React from 'react';
import { Link } from 'react-router-dom';
import './Shops.scss';

class Shops extends React.Component {
  render() {
    const shopId = 12345;
    return (
      <div className="Shops">
        <h1>Shops</h1>
        <Link className="btn btn-primary" to="/shop/new">Add New Shop</Link>
        <Link className="btn btn-success" to={`/shop/${shopId}`}>View Single Shop: {shopId}</Link>
      </div>
    );
  }
}

export default Shops;
