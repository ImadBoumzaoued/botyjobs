import React from "react";
import ReactDOM from "react-dom";

import ToastManager from "./ToastManager";

export default class Toaster {
  constructor() {
    const container = document.createElement("div");
    container.setAttribute("toaster-container", "");
    document.body.appendChild(container);

    ReactDOM.render(
      <ToastManager
        bindNotify={this._bindNotify}
        bindGetToasts={this._bindGetToasts}
        bindCloseAll={this._bindCloseAll}
      />,
      container,
    );
  }

  _bindNotify = handler => {
    this.notifyHandler = handler;
  };

  _bindGetToasts = handler => {
    this.getToastsHandler = handler;
  };

  _bindCloseAll = handler => {
    this.closeAllHandler = handler;
  };

  getToasts = () => {
    return this.getToastsHandler();
  };

  closeAll = () => {
    return this.closeAllHandler();
  };

  notify = (title, settings = {}) => {
    return this.notifyHandler(title, { ...settings, intent: "base" });
  };

  success = (title, settings = {}) => {
    return this.notifyHandler(title, { ...settings, intent: "success" });
  };

  warning = (title, settings = {}) => {
    return this.notifyHandler(title, { ...settings, intent: "warning" });
  };

  danger = (title, settings = {}) => {
    return this.notifyHandler(title, { ...settings, intent: "danger" });
  };
}
