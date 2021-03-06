import React from "react";
import { Switch, Route } from "react-router-dom";

import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import Product from "../pages/Product";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/produto/:name" component={Product} />
      <Route path="/checkout" component={Checkout} />
    </Switch>
  );
}
