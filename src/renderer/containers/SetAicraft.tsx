import Form from "react-bootstrap/Form";
import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import FormPage from "../components/FormPage";

import { InputAction, setAircraftId } from "../actions/inputActions";

import { RootState } from "../reducers";
import Table from "react-bootstrap/esm/Table";
import makeGetDistance from "../computedValues/computedAirportValues";

type Props = {
  aircrafts: RootState["aircraft"]["aircrafts"];
  aircraft?: RootState["aircraft"]["aircrafts"][0];
  setAircraftId: (id: string) => void;
  distance: number;
};
const SetAircraft: React.FC<Props> = ({
  aircrafts,
  aircraft,
  setAircraftId,
  distance,
}) => {
  return (
    <div>
      <Form>
        <Form.Group controlId="aircraft">
          <Form.Label>Choose Aircraft Type</Form.Label>
          <Form.Control
            as="select"
            htmlSize={3}
            custom
            size="lg"
            onChange={(e) => setAircraftId(e.target.value)}
            value={aircraft?.id}
          >
            {aircrafts.map(({ id, name, maximumFlightRangeInKm }) => (
              <option
                value={id}
                key={id}
                disabled={maximumFlightRangeInKm < distance}
              >
                {name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>
      {aircraft && (
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>Running Cost per Set</td>
              <td>{aircraft.runningCostPerSeatPer100Km} / 100km</td>
            </tr>
            <tr>
              <td>Maximum Flight Range</td>
              <td>{aircraft.maximumFlightRangeInKm}km</td>
            </tr>
            <tr>
              <td>Capacity (if standard class only)</td>
              <td>{aircraft.capacityIfAllSeatsAreStandartClass}</td>
            </tr>
            <tr>
              <td>Min. Number of First Class Seats</td>
              <td>{aircraft.minimumNumberOfFirstClassSeats}</td>
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
};

const makeMapStateToProps = () => {
  const getDistance = makeGetDistance();
  return (state: RootState) => {
    return {
      aircrafts: state.aircraft.aircrafts,
      aircraft: state.aircraft.aircrafts.find(
        ({ id }) => id === state.input.aircraftId
      ),
      distance: getDistance(state),
    };
  };
};

const mapDispatchToProps = (dispatch: Dispatch<InputAction>) => {
  return {
    setAircraftId: (code: string) => dispatch(setAircraftId(code)),
  };
};

export default FormPage(
  connect(makeMapStateToProps, mapDispatchToProps)(SetAircraft)
);
