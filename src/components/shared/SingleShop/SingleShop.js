import React from 'react';
import { Link } from 'react-router-dom';

import './SingleShop.scss';

class SingleShop extends React.Component {
  render() {
    const shopId = 12345;
    const logId = 678910;
    return (
      <div className="SingleShop">
        <h1>Single Shop</h1>
        <Link className="btn btn-success" to={`/shop/${shopId}/log/new`}>+ Log Visit</Link>
        <Link className="btn btn-secondary" to={`/shop/${shopId}/log/${logId}/edit`}>Edit Visit</Link>
      </div>
    );
  }
}

export default SingleShop;
