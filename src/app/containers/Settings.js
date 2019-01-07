import React, { Component } from "react";
import Card from "common/components/Card";

class Settings extends Component {
  render() {
    return <Card>Settings coming soon</Card>;
  }
}

Settings.tabProps = {
  label: "Settings",
  icon: "settings",
  iconActive: "settings",
  href: "/settings",
};

export default Settings;
