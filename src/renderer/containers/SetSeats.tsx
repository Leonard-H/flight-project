import Form from "react-bootstrap/Form";
import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import FormPage from "../components/FormPage";

import {
  InputAction,
  setNumberOfFirstClassSeats,
} from "../actions/inputActions";

import { RootState } from "../reducers";
import { makeGetIsNumberOfFirstClassSeatsValid } from "../computedValues/computedInputValues";

type Props = {
  setNumberOfFirstClassSeats: (num: number) => void;
  numberOfFirstClassSeats: number;
  isNumberOfFirstClassSeatsValid: boolean;
};
const SetSeats: React.FC<Props> = ({
  numberOfFirstClassSeats,
  setNumberOfFirstClassSeats,
  isNumberOfFirstClassSeatsValid,
}) => {
  return (
    <Form>
      <Form.Group controlId="aircraft">
        <Form.Label>Input Number of First Class Seats</Form.Label>
        <input
          type="number"
          className="form-control"
          onChange={(e) => setNumberOfFirstClassSeats(Number(e.target.value))}
        />
      </Form.Group>
      {numberOfFirstClassSeats}
      {String(isNumberOfFirstClassSeatsValid)}
    </Form>
  );
};

const makeMapStateToProps = () => {
  const getIsNumberOfFirstClassSeatsValid = makeGetIsNumberOfFirstClassSeatsValid();
  return (state: RootState) => {
    return {
      numberOfFirstClassSeats: state.input.numberOfFirstClassSeats,
      isNumberOfFirstClassSeatsValid: getIsNumberOfFirstClassSeatsValid(state),
    };
  };
};

const mapDispatchToProps = (dispatch: Dispatch<InputAction>) => {
  return {
    setNumberOfFirstClassSeats: (num: number) =>
      dispatch(setNumberOfFirstClassSeats(num)),
  };
};

export default FormPage(
  connect(makeMapStateToProps, mapDispatchToProps)(SetSeats)
);
