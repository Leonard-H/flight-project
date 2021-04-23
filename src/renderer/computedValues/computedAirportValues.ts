import { createSelector } from "reselect";
import { RootState } from "../reducers";

const getInput = (state: RootState) => state.input;
const getOsAirports = (state: RootState) => state.airport.overseas;

export const makeGetDistance = () => {
  return createSelector([getInput, getOsAirports], (input, osAirports) => {
    const osAirport = osAirports.find(
      ({ code }) => code === input.overseasAirport
    );
    const distance = osAirport
      ? osAirport[
          input.ukAirport === "LPL" ? "distanceFromLPL" : "distanceFromBOH"
        ]
      : 0;
    return distance;
  });
};
