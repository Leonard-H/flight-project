import { createSelector } from "reselect";
import { RootState } from "../reducers";

const getInput = (state: RootState) => state.input;
const getAircrafts = (state: RootState) => state.aircraft;

const makeGetIsNumberOfFirstClassSeatsValid = () => {
  return createSelector([getInput, getAircrafts], (input, aircrafts) => {
    if (input.numberOfFirstClassSeats === 0) return true;
    const aircraft = aircrafts.aircrafts.find(
      ({ id }) => id === input.aircraftId
    );
    if (!aircraft) return false;
    return (
      input.numberOfFirstClassSeats >=
        aircraft.minimumNumberOfFirstClassSeats &&
      input.numberOfFirstClassSeats <=
        aircraft.capacityIfAllSeatsAreStandartClass / 2
    );
  });
};

export default makeGetIsNumberOfFirstClassSeatsValid;
