import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import "./config/ReactotronConfig";
import Routes from "./routes";
import store from "./store";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
