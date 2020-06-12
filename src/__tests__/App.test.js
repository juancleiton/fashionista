import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { render } from "@testing-library/react";

import App from "~/App";

describe("App", () => {
  it("Should be able render 22 products from api", async () => {
    const { findAllByTestId } = render(<App />);

    const cardProduct = await findAllByTestId("cardProduct");

    expect(cardProduct.length).toBe(22);
  });
});
