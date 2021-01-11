import { Reducer } from "redux";

import { ADD, REMOVE, AircraftAction } from "../actions/aircraftActions";

export interface AircraftState {
  aircrafts: {
    id: string;
    name: string;
    runningCostPerSeatPer100Km: number;
    maximumFlightRangeInKm: number;
    capacityIfAllSeatsAreStandartClass: number;
    minimumNumberOfFirstClassSeats: number;
  }[];
}

const initialState: AircraftState = {
  aircrafts: [
    {
      id: "0",
      name: "Medium Narrow Body",
      runningCostPerSeatPer100Km: 8,
      maximumFlightRangeInKm: 2650,
      capacityIfAllSeatsAreStandartClass: 180,
      minimumNumberOfFirstClassSeats: 8
    },
    {
      id: "1",
      name: "Large Narrow Body",
      runningCostPerSeatPer100Km: 7,
      maximumFlightRangeInKm: 5600,
      capacityIfAllSeatsAreStandartClass: 220,
      minimumNumberOfFirstClassSeats: 10
    },
    {
      id: "2",
      name: "Medium Wide Body",
      runningCostPerSeatPer100Km: 5,
      maximumFlightRangeInKm: 4050,
      capacityIfAllSeatsAreStandartClass: 406,
      minimumNumberOfFirstClassSeats: 14
    }
  ]
};

export const aircraftReducer: Reducer<AircraftState> = (
  state = initialState,
  action: AircraftAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};
