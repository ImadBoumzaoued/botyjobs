import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import PropTypes from "prop-types";
import TabLayout from "common/components/TabLayout";

import _Dashboard from "app/containers/Dashboard";
import _CreateJob from "app/containers/CreateJob";
import _JobList from "app/containers/JobList";
import _Candidates from "app/containers/Candidates";
import _Settings from "app/containers/Settings";
import _Calendar from "app/containers/Calendar";
import _Reports from "app/containers/Reports";

const Dashboard = () => (
  <Route exact path={_Dashboard.tabProps.href} component={_Dashboard} />
);
Dashboard.tabProps = _Dashboard.tabProps;

const CreateJob = () => (
  <Route exact path={_CreateJob.tabProps.href} component={_CreateJob} />
);
CreateJob.tabProps = _CreateJob.tabProps;

const JobList = () => (
  <Route exact path={_JobList.tabProps.href} component={_JobList} />
);
JobList.tabProps = _JobList.tabProps;

const Candidates = () => (
  <Route exact path={_Candidates.tabProps.href} component={_Candidates} />
);
Candidates.tabProps = _Candidates.tabProps;

const Settings = () => (
  <Route exact path={_Settings.tabProps.href} component={_Settings} />
);
Settings.tabProps = _Settings.tabProps;

const Calendar = () => (
  <Route exact path={_Calendar.tabProps.href} component={_Calendar} />
);
Calendar.tabProps = _Calendar.tabProps;

const Reports = () => (
  <Route exact path={_Reports.tabProps.href} component={_Reports} />
);
Reports.tabProps = _Reports.tabProps;

const JobContainer = ({ location }) => {
  let title;
  switch (location.pathname) {
    case CreateJob.tabProps.href:
      title = CreateJob.tabProps.label;
      break;
    case JobList.tabProps.href:
      title = JobList.tabProps.label;
      break;
    case Candidates.tabProps.href:
      title = Candidates.tabProps.label;
      break;
    case Settings.tabProps.href:
      title = Settings.tabProps.label;
      break;
    case Calendar.tabProps.href:
      title = Calendar.tabProps.label;
      break;
    case Reports.tabProps.href:
      title = Reports.tabProps.label;
      break;
    default:
      title = Dashboard.tabProps.label;
  }
  return (
    <TabLayout title={title}>
      <Dashboard />
      <CreateJob />
      <JobList />
      <Candidates />
      <Calendar />
      <Reports />
      <Settings />
    </TabLayout>
  );
};

function mapStateToProps() {
  return {};
}

JobContainer.propTypes = {
  location: PropTypes.object,
};

const enhance = compose(connect(mapStateToProps));

export default enhance(JobContainer);
