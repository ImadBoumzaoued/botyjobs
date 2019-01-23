import React from "react";
import Card from "common/components/Card";

function Settings() {
  return <Card>Settings coming soon</Card>;
}

Settings.tabProps = {
  label: "Settings",
  icon: "settings",
  iconActive: "settings",
  href: "/settings",
};

export default Settings;
