import React from "react";
import Container from "react-bootstrap/esm/Container";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Start from "./containers/Start";
import SetAirports from "./containers/SetAirports";
import SetAircraft from "./containers/SetAicraft";
import SetSeats from "./containers/SetSeats";

type Props = {};
const Router: React.FC<Props> = () => {
  return (
    <Container>
      <HashRouter>
        <Switch>
          <Route exact path="/form" component={Start} />
          <Redirect exact from="/" to="/form" />
          <Route exact path="/form/set-airports" component={SetAirports} />
          <Route exact path="/form/set-aircraft" component={SetAircraft} />
          <Route exact path="/form/set-seats" component={SetSeats} />
        </Switch>
      </HashRouter>
    </Container>
  );
};

export default Router;
