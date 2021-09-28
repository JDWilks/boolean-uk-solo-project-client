import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import { ModalContainer } from "./pages/ModalsContainer";
import Trade from "./pages/Trade";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/trade" exact>
          <Trade />
        </Route>
        <Route path="/admin" exact>
          <Admin />
        </Route>
      </Switch>
      <ModalContainer />
    </>
  );
}

export default App;
