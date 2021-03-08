import Form from "react-bootstrap/Form";
import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import FormPage from "../components/FormPage";

import {
  InputAction,
  setUkAirport,
  setOverseasAirport,
} from "../actions/inputActions";

import { RootState } from "../reducers";

type Props = {
  airport: RootState["airport"];
  setUkAirport: (code: string) => void;
  setOverseasAirport: (code: string) => void;
};
const SetAirports: React.FC<Props> = ({
  airport,
  setUkAirport,
  setOverseasAirport,
}) => {
  return (
    <Form>
      <Form.Group controlId="ukAirport">
        <Form.Label>Choose UK Airport</Form.Label>
        <Form.Control
          as="select"
          htmlSize={3}
          custom
          size="lg"
          onChange={(e) => setUkAirport(e.target.value)}
        >
          {airport.uk.map((airport) => (
            <option value={airport.code} key={airport.code}>
              {airport.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="overseasAirport">
        <Form.Label>Choose Overseas Airport</Form.Label>
        <Form.Control
          as="select"
          htmlSize={3}
          custom
          size="lg"
          onChange={(e) => setOverseasAirport(e.target.value)}
        >
          {airport.overseas.map((airport) => (
            <option value={airport.code} key={airport.code}>
              {airport.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    airport: state.airport,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<InputAction>) => {
  return {
    setUkAirport: (code: string) => dispatch(setUkAirport(code)),
    setOverseasAirport: (code: string) => dispatch(setOverseasAirport(code)),
  };
};

export default FormPage(
  connect(mapStateToProps, mapDispatchToProps)(SetAirports)
);
