import React from 'react';

import './VisitCard.scss';

class VisitCard extends React.Component {
  render() {
    return (
      <div className="VisitCard">
        <h3>Single Visit Card</h3>
        {/* <Link className="btn btn-secondary" to={`/shop/${shop.id}/log/${logId}/edit`}>Edit Visit</Link> */}
      </div>
    );
  }
}

export default VisitCard;
