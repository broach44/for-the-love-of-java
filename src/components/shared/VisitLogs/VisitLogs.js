import React from 'react';
import PropTypes from 'prop-types';

import VisitCard from '../VisitCard/VisitCard';

import logShape from '../../../helpers/propz/logShape';

import './VisitLogs.scss';

class VisitLogs extends React.Component {
  static propTypes = {
    logs: PropTypes.arrayOf(logShape.logShape),
  }

  render() {
    const { logs } = this.props;
    return (
      <div className="VisitLogs">
        <h1>Visit Logs</h1>
        {
          logs.map((log) => <VisitCard key={log.id} log={log} />)
        }
      </div>
    );
  }
}

export default VisitLogs;
