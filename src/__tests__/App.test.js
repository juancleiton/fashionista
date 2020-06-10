import React from "react";
import { Provider, useSelector } from "react-redux";
import "@testing-library/jest-dom/extend-expect";
import { Router } from "react-router-dom";

import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";

import Catalog from "~/components/Catalog";
import Header from "~/components/Header";
import Home from "~/pages/Home";
import { store } from "~/store";

const history = createMemoryHistory();

describe("App", () => {
  it("should render the <Home> component", () => {
    const { getByTestId } = render(
      <Router history={history}>
        <Provider store={store}>
          <Home>
            <Header />
            <Catalog />
          </Home>
        </Provider>
      </Router>
    );

    const container = getByTestId("home");

    expect(container).toBeDefined();
  });
});
