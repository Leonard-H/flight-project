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
import {
  makeGetIsNumberOfFirstClassSeatsValid,
  makeGetNumberOfStandardClassSeats,
} from "../computedValues/computedInputValues";
import Table from "react-bootstrap/esm/Table";

type Props = {
  setNumberOfFirstClassSeats: (num: number) => void;
  numberOfFirstClassSeats: number;
  isNumberOfFirstClassSeatsValid: boolean;
  numberOfStandardClassSeats: number | null;
};
const SetSeats: React.FC<Props> = ({
  numberOfFirstClassSeats,
  setNumberOfFirstClassSeats,
  isNumberOfFirstClassSeatsValid,
  numberOfStandardClassSeats,
}) => {
  return (
    <div>
      <Form>
        <Form.Group controlId="aircraft">
          <Form.Label>Input Number of First Class Seats</Form.Label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setNumberOfFirstClassSeats(Number(e.target.value))}
          />
        </Form.Group>
      </Form>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Number of First Class Seats</td>
            <td>
              {isNumberOfFirstClassSeatsValid ? numberOfFirstClassSeats : null}
            </td>
          </tr>
          <tr>
            <td>Number of Standard Class Seats</td>
            <td>
              {isNumberOfFirstClassSeatsValid
                ? numberOfStandardClassSeats
                : null}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

const makeMapStateToProps = () => {
  const getIsNumberOfFirstClassSeatsValid = makeGetIsNumberOfFirstClassSeatsValid();
  const getNumberOfStandardClassSeats = makeGetNumberOfStandardClassSeats();
  return (state: RootState) => {
    return {
      numberOfFirstClassSeats: state.input.numberOfFirstClassSeats,
      isNumberOfFirstClassSeatsValid: getIsNumberOfFirstClassSeatsValid(state),
      numberOfStandardClassSeats: getNumberOfStandardClassSeats(state),
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
