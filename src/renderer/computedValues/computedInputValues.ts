import { createSelector } from "reselect";
import { RootState } from "../reducers";

const getInput = (state: RootState) => state.input;
const getAircrafts = (state: RootState) => state.aircraft.aircrafts;

export const makeGetIsNumberOfFirstClassSeatsValid = () => {
  return createSelector([getInput, getAircrafts], (input, aircrafts) => {
    if (input.numberOfFirstClassSeats === 0) return true;
    const aircraft = aircrafts.find(({ id }) => id === input.aircraftId);
    if (!aircraft) return false;
    return (
      input.numberOfFirstClassSeats >=
        aircraft.minimumNumberOfFirstClassSeats &&
      input.numberOfFirstClassSeats <=
        aircraft.capacityIfAllSeatsAreStandartClass / 2
    );
  });
};

export const makeGetNumberOfStandardClassSeats = () => {
  return createSelector([getInput, getAircrafts], (input, aircrafts) => {
    const aircraft = aircrafts.find(({ id }) => id === input.aircraftId);
    if (!aircraft) return null;
    return (
      aircraft.capacityIfAllSeatsAreStandartClass -
      input.numberOfFirstClassSeats * 2
    );
  });
};
