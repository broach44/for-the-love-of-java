import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

import logShape from '../../../helpers/propz/logShape';
import authData from '../../../helpers/data/authData';

import './VisitCard.scss';

class VisitCard extends React.Component {
  static propTypes = {
    log: logShape.logShape,
    deleteEntry: PropTypes.func,
  }

  deleteEntryEvent = (e) => {
    e.preventDefault();
    const { log, deleteEntry } = this.props;
    deleteEntry(log.id);
  }

  render() {
    const { log } = this.props;
    return (
      <div className="VisitCard col-4">
        <div className="card justify-text-left">
          <h5 className="card-header">Date of Visit: {moment(log.dateOfVisit).format(' LL ')}</h5>
          <div className="card-body">
            <h5 className="card-title">Purpose of Visit: {log.purposeOfVisit}</h5>
            <p className="card-text">Drinks: {log.drinksConsumed}</p>
            <p className="card-text">Food: {log.foodConsumed}</p>
            <p className="card-text">Comments: {log.comments}</p>
            {
              (log.wouldRecommend) ? <p className="card-text">Yes I would recommend to others</p>
                : <p className="card-text">No I would not recommend to others</p>
            }
            <p className="card-text ratingTitle">Ratings:</p>
            <div className="card-text row">
              <ul className="col">
                <li>Food: {log.foodRating}</li>
                <li>Drink: {log.drinkRating}</li>
                <li>Pricing: {log.pricingRating}</li>
              </ul>
              <ul className="col">
                <li>Tech: {log.techRating}</li>
                <li>Wifi: {log.wifiRating}</li>
                <li>Environment: {log.environmentRating}</li>
              </ul>
            </div>
            {
              (log.uid === authData.getUid()) && <div>
                <button className="btn btn-danger" onClick={this.deleteEntryEvent}>Delete Log Entry</button>
                <Link className="btn btn-secondary" to={`/shop/${log.shopId}/log/${log.id}/edit`}>Edit Visit</Link>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default VisitCard;
