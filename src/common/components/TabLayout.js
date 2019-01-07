import React, { Component } from "react";
import { withRouter } from "react-router";
import { compose } from "redux";

import { css, withStyles } from "withStyles";
import menuIcon from "common/assets/menu-three-icon.svg";
import Icon from "common/components/Icon";

class TabLayout extends Component {
  state = {
    isOpened: false,
  };

  handleToggleMenu = () => this.setState({ isOpened: !this.state.isOpened });

  topBarHandler = callbackUrl => () => {
    this.props.history.push(callbackUrl);
    this.setState({
      isOpened: false,
    });
  };

  render() {
    const { styles, children, title } = this.props;
    const { isOpened } = this.state;
    return (
      <div {...css(styles.root)}>
        <div {...css(styles.leftBar)}>
          {React.Children.map(
            children,
            child => child && <TabLayout.Tab {...child.type.tabProps} />,
          )}
        </div>

        <div {...css(styles.topBar, isOpened && styles.topBarOpened)}>
          <div {...css(styles.topBarHeader)}>
            <strong>{title}</strong>
            <img
              src={menuIcon}
              {...css(styles.menuIcon)}
              onClick={this.handleToggleMenu}
              alt="menu"
            />
          </div>
          {React.Children.map(
            children,
            child =>
              child && (
                <div
                  {...css(styles.topBarItem)}
                  onClick={this.topBarHandler(child.type.tabProps.href)}
                >
                  {child.type.tabProps.label}
                </div>
              ),
          )}
        </div>

        <div {...css(styles.contentContainer)}>{children}</div>
      </div>
    );
  }
}

const enhanced = compose(
  withRouter,
  withStyles(({ color, unit }) => ({
    root: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      "@media (max-width: 575px)": {
        flexDirection: "column",
        paddingTop: 55,
      },
    },
    topBar: {
      maxHeight: 55,
      width: "calc(100vw - 30px)",
      top: 0,
      position: "absolute",
      backgroundColor: color.sidebar.background,
      color: "white",
      display: "none",
      transitionDuration: "0.3s",
      transition: "max-height 0.5s cubic-bezier(0, 1, 0, 1)",
      overflow: "hidden",
      padding: "0px 15px",
      "@media (max-width: 575px)": {
        display: "block",
      },
      zIndex: 1000,
    },
    topBarItem: {
      marginBottom: "1rem",
    },
    topBarOpened: {
      maxHeight: 3000,
      transition: "max-height 1s ease-in-out",
    },
    topBarHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 55,
    },
    leftBar: {
      width: 98,
      backgroundColor: color.sidebar.background,
      "@media (max-width: 575px)": {
        display: "none",
      },
    },
    contentContainer: {
      flex: 1,
      backgroundColor: color.bodyBackground,
      padding: 30,
      overflow: "scroll",
      "@media (max-width: 575px)": {
        padding: 10,
        overflow: "inherit",
      },
    },
    tab: {
      padding: "15px 0px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      cursor: "pointer",
    },
    tabActive: {
      backgroundColor: color.sidebar.active,
    },
    tabLabel: {
      marginTop: 6,
      fontWeight: "800",
      textTransform: "uppercase",
      fontSize: unit.getRem(10),
      color: color.text.muted,
    },
    tabLabelActive: {
      color: "white",
    },
    tabIcon: {
      height: 28,
      width: "auto",
      objectFit: "contain",
      color: color.text.muted,
    },
    tabIconActive: {
      color: "white",
    },
    menuIcon: {
      height: 20,
    },
  })),
);

const Tab = ({ href, styles, location, history, label, icon }) => (
  <div
    {...css(styles.tab, location.pathname === href && styles.tabActive)}
    onClick={() => history.push(href)}
  >
    <span
      {...css(
        styles.tabIcon,
        location.pathname === href && styles.tabIconActive,
      )}
    >
      <Icon
        size={20}
        icon={icon}
        color={location.pathname === href ? "#fff" : "rgba(255, 255, 255, 0.5)"}
      />
    </span>
    <div
      {...css(
        styles.tabLabel,
        location.pathname === href && styles.tabLabelActive,
      )}
    >
      {label}
    </div>
  </div>
);

TabLayout.Tab = enhanced(Tab);

export default enhanced(TabLayout);
