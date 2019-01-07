import React, { Component } from "react";

class Reports extends Component {
  render() {
    return <div>Hello there, reports are coming soon.</div>;
  }
}

Reports.tabProps = {
  label: "Reports",
  icon: "chart",
  iconActive: "chart",
  href: "/reports",
};

export default Reports;
