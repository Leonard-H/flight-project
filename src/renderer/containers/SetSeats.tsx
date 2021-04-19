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

type Props = {
  setNumberOfFirstClassSeats: (num: number) => void;
  numberOfFirstClassSeats: number;
};
const SetSeats: React.FC<Props> = ({
  numberOfFirstClassSeats,
  setNumberOfFirstClassSeats,
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
    </Form>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    numberOfFirstClassSeats: state.input.numberOfFirstClassSeats,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<InputAction>) => {
  return {
    setNumberOfFirstClassSeats: (num: number) =>
      dispatch(setNumberOfFirstClassSeats(num)),
  };
};

export default FormPage(connect(mapStateToProps, mapDispatchToProps)(SetSeats));
