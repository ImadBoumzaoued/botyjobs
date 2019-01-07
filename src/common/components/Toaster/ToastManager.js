import React, { PureComponent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Toast from "./Toast";

const Wrapper = styled.span`
  max-width: 560px;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 30;
`;
const hasCustomId = settings => Object.hasOwnProperty.call(settings, "id");

class ToastManager extends PureComponent {
  static propTypes = {
    bindNotify: PropTypes.func.isRequired,
    bindGetToasts: PropTypes.func.isRequired,
    bindCloseAll: PropTypes.func.isRequired,
  };

  static idCounter = 0;

  constructor(props, context) {
    super(props, context);

    props.bindNotify(this.notify);
    props.bindGetToasts(this.getToasts);
    props.bindCloseAll(this.closeAll);

    this.state = {
      toasts: [],
    };
  }

  getToasts = () => {
    return this.state.toasts;
  };

  closeAll = () => {
    this.getToasts().forEach(toast => toast.close());
  };

  notify = (title, settings) => {
    if (hasCustomId(settings)) {
      for (const toast of this.state.toasts) {
        if (String(toast.id).startsWith(settings.id)) {
          this.closeToast(toast.id);
        }
      }
    }

    const instance = this.createToastInstance(title, settings);

    this.setState(previousState => {
      return {
        toasts: [instance, ...previousState.toasts],
      };
    });

    return instance;
  };

  createToastInstance = (title, settings) => {
    const uniqueId = ++ToastManager.idCounter;
    const id = hasCustomId(settings) ? `${settings.id}-${uniqueId}` : uniqueId;

    return {
      id,
      title,
      description: settings.description,
      closable: settings.closable || true,
      duration: settings.duration || 5,
      close: () => this.closeToast(id),
      intent: settings.intent,
    };
  };

  closeToast = id => {
    this.setState(previousState => {
      return {
        toasts: previousState.toasts.map(toast => {
          if (toast.id === id) {
            return {
              ...toast,
              isVisible: false,
            };
          }
          return toast;
        }),
      };
    });
  };

  removeToast = id => {
    this.setState(previousState => {
      return {
        toasts: previousState.toasts.filter(toast => toast.id !== id),
      };
    });
  };

  render() {
    return (
      <Wrapper>
        {this.state.toasts.map(({ id, description, ...props }) => (
          <Toast key={id} onRemove={() => this.removeToast(id)} {...props}>
            {description}
          </Toast>
        ))}
      </Wrapper>
    );
  }
}

export default ToastManager;
