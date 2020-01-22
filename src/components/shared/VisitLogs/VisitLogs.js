import React from 'react';

import VisitCard from '../VisitCard/VisitCard';

import userLogData from '../../../helpers/data/userLogData';
import shopShape from '../../../helpers/propz/shopShape';

import './VisitLogs.scss';

class VisitLogs extends React.Component {
  static propTypes = {
    shop: shopShape.shopShape,
  }

  getLogs = (shopId) => {
    userLogData.getLogsByShopId(shopId)
      .then((logs) => this.setState({ logs }))
      .catch((err) => console.error('err from getLogs', err));
  }

  componentDidMount() {
    const { shop } = this.props;
    this.getLogs(shop.id);
  }

  render() {
    const { shop } = this.props;
    return (
      <div className="VisitLogs">
        <h1>Visit Logs for {shop.name}</h1>
        <VisitCard />
      </div>
    );
  }
}

export default VisitLogs;
