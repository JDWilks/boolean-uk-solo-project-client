import React from "react";
import { Switch, Route } from "react-router-dom";
import Loggedin from "./pages/Loggedin";
import Login from "./pages/Login";
import { ModalContainer } from "./pages/ModalsContainer";
import WantList from "./pages/WantList";

function App() {
  return (
    <>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>

        <Route path="/loggedin" exact>
          <Loggedin />
        </Route>

        <Route path="/wantlist" exact>
          <WantList />
        </Route>
      </Switch>
      <ModalContainer />
    </>
  );
}

export default App;
