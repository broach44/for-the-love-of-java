import React from 'react';
import { Link } from 'react-router-dom';
import './VisitCard.scss';
import logShape from '../../../helpers/propz/logShape';

class VisitCard extends React.Component {
  static propTypes = {
    log: logShape.logShape,
  }

  render() {
    const { log } = this.props;
    return (
      <div className="VisitCard">
        <div className="card justify-text-left">
          <h5 className="card-header">Date of Visit: {log.dateOfVisit}</h5>
          <div className="card-body">
            <h5 className="card-title">Purpose of Visit: {log.purposeOfVisit}</h5>
            <p className="card-text">Drinks: {log.drinksConsumed}</p>
            <p className="card-text">Food: {log.foodConsumed}</p>
            <p className="card-text">Comments: {log.comments}</p>
            <p className="card-text">Ratings:</p>
            <p className="card-text">
              Food: {log.foodRating}  Drink: {log.drinkRating}  Pricing: {log.pricingRating}  Tech: {log.techRating}  Wifi: {log.wifiRating}  Environment: {log.environmentRating}
            </p>
            <Link className="btn btn-secondary" to={`/shop/${log.shopId}/log/${log.id}/edit`}>Edit Visit</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VisitCard;
