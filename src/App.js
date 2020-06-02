import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { PersistGate } from "redux-persist/integration/react";

import "./config/ReactotronConfig";
import Routes from "./routes";
import { store, persistor } from "./store";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <GlobalStyle />
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
