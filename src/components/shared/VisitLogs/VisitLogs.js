import React from 'react';
import PropTypes from 'prop-types';

import VisitCard from '../VisitCard/VisitCard';

import logShape from '../../../helpers/propz/logShape';

import './VisitLogs.scss';

class VisitLogs extends React.Component {
  static propTypes = {
    logs: PropTypes.arrayOf(logShape.logShape),
    deleteEntry: PropTypes.func,
  }

  render() {
    const { logs, deleteEntry } = this.props;
    return (
      <div className="VisitLogs">
        <div className="row justify-content-around">
        {
          logs.map((log) => <VisitCard key={log.id} log={log} deleteEntry={deleteEntry} />)
        }
        </div>
      </div>
    );
  }
}

export default VisitLogs;
