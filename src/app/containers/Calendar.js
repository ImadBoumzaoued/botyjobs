import React, { Component } from "react";

class Calendar extends Component {
  render() {
    return <div>Hello there, no appointements yet</div>;
  }
}

Calendar.tabProps = {
  label: "Calendar",
  icon: "timeline-events",
  iconActive: "timeline-events",
  href: "/calendar",
};

export default Calendar;
