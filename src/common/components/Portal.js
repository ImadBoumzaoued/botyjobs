import { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

let portalContainer;

class Portal extends Component {
  constructor(props) {
    super(props);
    if (!portalContainer) {
      portalContainer = document.createElement("div");
      portalContainer.setAttribute("portal-container", "");
      document.body.appendChild(portalContainer);
    }
    this.el = document.createElement("div");
    portalContainer.appendChild(this.el);
  }

  componentWillUnmount() {
    portalContainer.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Portal;
