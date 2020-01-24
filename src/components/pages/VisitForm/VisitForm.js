import React from 'react';

import userLogsData from '../../../helpers/data/userLogData';

import './VisitForm.scss';

class VisitForm extends React.Component {
  state = {
    newDate: '',
    newComments: '',
    newPurpose: '',
    newWouldRecommend: '',
    newEnvironmentRating: '',
  }

  createNewLogObj = () => {
    const {
      newDate,
      newComments,
      newPurpose,
      newWouldRecommend,
      newEnvironmentRating,
    } = this.state;
    const newLogObj = {
      dateOfVisit: newDate,
      comments: newComments,
      purposeOfvisit: newPurpose,
      wouldRecommend: newWouldRecommend,
      environmentRating: newEnvironmentRating,
    };
    return newLogObj;
  }

  addNewLog = (e) => {
    userLogsData.saveNewLog(this.createNewLogObj())
      .then(() => console.log('it worked'))
      .catch((err) => console.error('err from new Log', err));
  }

  changeDate = (e) => {
    this.setState({ newDate: e.target.value });
  }

  changeComment = (e) => {
    this.setState({ newComments: e.target.value });
  }

  changePurpose = (e) => {
    this.setState({ newPurpose: e.target.value });
  }

  changeRecommendation = (e) => {
    this.setState({ newWouldRecommend: e.target.value });
  }

  changeEnvironmentRating = (e) => {
    this.setState({ newEnvironmentRating: e.target.value });
  }

  render() {
    const {
      newDate,
      newComments,
      newPurpose,
      newWouldRecommend,
      newEnvironmentRating,
    } = this.state;
    return (
      <div className="VisitForm">
        <h1>Log Visit Form</h1>
          <div className="form-group">
            <label for="dateOfVisit">Date of Visit</label>
            <input
              type="text"
              className="form-control"
              id="dateOfVisit"
              placeholder="1/1/2020"
              value={newDate}
              onChange={this.changeDate}
            />
          </div>
          <div className="form-group">
            <label for="comments">Comments</label>
            <input
              type="text"
              className="form-control"
              id="comments"
              placeholder="Add some comments about the visit"
              value={newComments}
              onChange={this.changeComment}
            />
          </div>
          <div className="form-group">
            <label for="purposeOfVisit">Purpose of Visit</label>
            <input
              type="text"
              className="form-control"
              id="purposeOfVisit"
              placeholder="What brought you in?"
              value={newPurpose}
              onChange={this.changePurpose}
            />
          </div>
          <div className="form-group">
            <label for="Recommendation">Recommendation: </label>
            <input
              type="text"
              className="form-control"
              id="Recommendation"
              placeholder="Would you recommend to others?"
              value={newWouldRecommend}
              onChange={this.changeRecommendation}
            />
          </div>
          <div className="form-group">
            <label for="EnvironmentRating">Environment Rating: </label>
            <input
              type="number"
              className="form-control"
              id="EnvironmentRating"
              placeholder="Rate the environment on a scale of 1 to 5 (1 is worst, 5 is out of this world)"
              value={newEnvironmentRating}
              onChange={this.changeEnvironmentRating}
            />
          </div>
        <button className="btn btn-success" onClick={this.addNewLog}>Save New Entry</button>
      </div>
    );
  }
}

export default VisitForm;
