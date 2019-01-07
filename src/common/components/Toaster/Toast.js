import React, { PureComponent } from "react";
import styled, { keyframes } from "styled-components";
import Transition from "react-transition-group/Transition";
import PropTypes from "prop-types";
import { theme } from "withStyles";

import { Alert } from "../Alert";

const animationEasing = {
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`,
  spring: `cubic-bezier(0.175, 0.885, 0.320, 1.175)`,
};

const ANIMATION_DURATION = 240;

const openAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-120%);
  }
  to {
    transform: translateY(0);
  }
`;

const closeAnimation = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.9);
    opacity: 0
  }
`;

const AnimatedDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 0;
  transition: all ${ANIMATION_DURATION}ms ${animationEasing.deceleration};
  &[data-state="entering"],
  &[data-state="entered"] {
    animation: ${openAnimation} ${ANIMATION_DURATION}ms
      ${animationEasing.spring} both;
  }
  &[data-state="exiting"] {
    animation: ${closeAnimation} 120ms ${animationEasing.acceleration} both;
  }
`;

class Toast extends PureComponent {
  static propTypes = {
    duration: PropTypes.number,
    onRemove: PropTypes.func,
    intent: PropTypes.oneOf(["base", "success", "warning", "danger"])
      .isRequired,
    title: PropTypes.node,
    children: PropTypes.node,
    closable: PropTypes.bool,
    isVisible: PropTypes.bool,
  };

  static defaultProps = {
    intent: "danger",
  };

  state = {
    isVisible: true,
    height: 0,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.isVisible !== this.props.isVisible) {
      this.setState({
        isVisible: this.props.isVisible,
      });
    }
  }

  componentDidMount() {
    this.startCloseTimer();
  }

  componentWillUnmount() {
    this.clearCloseTimer();
  }

  onRef = ref => {
    if (ref === null) return;

    const { height } = ref.getBoundingClientRect();

    this.setState({
      height,
    });
  };

  startCloseTimer = () => {
    if (this.props.duration) {
      this.closeTimer = setTimeout(() => {
        this.close();
      }, this.props.duration * 1000);
    }
  };

  handleMouseEnter = () => {
    this.clearCloseTimer();
  };

  handleMouseLeave = () => {
    this.startCloseTimer();
  };

  clearCloseTimer = () => {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  };

  close = () => {
    this.clearCloseTimer();
    this.setState({
      isVisible: false,
    });
  };

  render() {
    return (
      <Transition
        appear
        unmountOnExit
        timeout={ANIMATION_DURATION}
        in={this.state.isVisible}
        onExited={this.props.onRemove}
      >
        {state => (
          <AnimatedDiv
            data-state={state}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            style={{
              height: this.state.height,
              marginBottom: this.state.isVisible ? 0 : -this.state.height,
            }}
          >
            <div ref={this.onRef} style={{ padding: 8 }}>
              <Alert
                flexShrink={0}
                intent={this.props.intent}
                title={this.props.title}
                isRemoveable={this.props.closable}
                onRemove={() => this.close()}
                style={{
                  boxShadow: `0 0 1px ${
                    theme.color.scales.N5A
                  }, 0 8px 10px -4px ${theme.color.scales.N6A}`,
                }}
              >
                {this.props.children}
              </Alert>
            </div>
          </AnimatedDiv>
        )}
      </Transition>
    );
  }
}

export default Toast;
