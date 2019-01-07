import React from "react";
import PropTypes from "prop-types";

import spinnerWhite from "common/assets/spinner.svg";
import spinner from "common/assets/spinner.svg";

const Spinner = ({ color, size }) => (
  <img
    src={color === "white" ? spinnerWhite : spinner}
    style={{ width: size, height: size }}
    alt=""
  />
);

Spinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

Spinner.defaultProps = {
  color: "white",
};

export default Spinner;
