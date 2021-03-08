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
  ukAirportCode: string;
  overseasAirportCode: string;
};
const SetAirports: React.FC<Props> = ({
  airport,
  setUkAirport,
  setOverseasAirport,
  ukAirportCode,
  overseasAirportCode,
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
          value={ukAirportCode ? ukAirportCode : undefined}
        >
          {airport.uk.map(({ code, name }) => (
            <option value={code} key={code}>
              {name}
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
          value={overseasAirportCode ? overseasAirportCode : undefined}
        >
          {airport.overseas.map(({ code, name }) => (
            <option value={code} key={code}>
              {name}
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
    ukAirportCode: state.input.ukAirport,
    overseasAirportCode: state.input.overseasAirport,
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
