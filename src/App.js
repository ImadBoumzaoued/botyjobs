import React, { Component } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Route } from "react-router-dom";
import logger from "redux-logger";
import { applyMiddleware, createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { theme } from "withStyles";

import AppContainer from "app/containers/AppContainer";

const GlobalStyles = createGlobalStyle`
  *,
  :after,
  :before {
    border: 0 solid currentColor;
  }
  html {
    font-size: 18px;
  }
  body {
    margin: 0;
    padding: 0;
    font-family:  'Muli', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`;

const store = createStore(combineReducers({}), applyMiddleware(logger));

class App extends Component {
  state = {
    isAuthenticating: false,
  };

  renderRoutes = () => <Route path="/" component={AppContainer} />;

  renderLoading = () => <div>Loading...</div>;

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <Router>{this.renderRoutes()}</Router>
            <GlobalStyles />
          </React.Fragment>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
