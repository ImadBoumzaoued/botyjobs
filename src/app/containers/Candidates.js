import React, { Component } from "react";
import { Alert } from "common/components/Alert";
import Button from "common/components/Button";
import toaster from "common/components/Toaster";
import Switch from "../../common/components/Switch/Switch";

class Candidates extends Component {
  render() {
    return (
      <React.Fragment>
        <Alert title="Hello there, no candidates yet">
          You can add candidates by sharing a job link, or adding one manually.
        </Alert>
        <Button
          onClick={() =>
            toaster.warning("Hello there, no candidates yet", {
              description:
                "You can add candidates by sharing a job link, or adding one manually.",
            })
          }
        >
          Toast
        </Button>
        <div style={{ backgroundColor: "white", padding: 20 }}>
          <Switch labeled onLabel="ON" offLabel="OFF" />
        </div>
      </React.Fragment>
    );
  }
}

Candidates.tabProps = {
  label: "Candidates",
  icon: "people",
  iconActive: "people",
  href: "/candidates/list",
};

export default Candidates;
