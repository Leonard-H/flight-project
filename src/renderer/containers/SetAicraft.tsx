import Form from "react-bootstrap/Form";
import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import FormPage from "../components/FormPage";

import { InputAction, setAircraftId } from "../actions/inputActions";

import { RootState } from "../reducers";

type Props = {
  aircrafts: RootState["aircraft"]["aircrafts"];
  aircraftId: string;
  setAircraftId: (id: string) => void;
};
const SetAirports: React.FC<Props> = ({
  aircrafts,
  aircraftId,
  setAircraftId,
}) => {
  return (
    <Form>
      <Form.Group controlId="ukAirport">
        <Form.Label>Choose Aircraft Type</Form.Label>
        <Form.Control
          as="select"
          htmlSize={3}
          custom
          size="lg"
          onChange={(e) => setAircraftId(e.target.value)}
          value={aircraftId ? aircraftId : undefined}
        >
          {aircrafts.map(({ id, name }) => (
            <option value={id} key={id}>
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
    aircrafts: state.aircraft.aircrafts,
    aircraftId: state.input.aircraftId,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<InputAction>) => {
  return {
    setAircraftId: (code: string) => dispatch(setAircraftId(code)),
  };
};

export default FormPage(
  connect(mapStateToProps, mapDispatchToProps)(SetAirports)
);
