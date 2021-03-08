import { Reducer } from "redux";

import { ADD, REMOVE, AirportAction } from "../actions/airportActions";

export interface AirportState {
  overseas: {
    code: string;
    name: string;
    distanceFromLPL: number;
    distanceFromBOH: number;
  }[];
  uk: {
    code: string;
    name: string;
  }[];
}

const initialState: AirportState = {
  overseas: [
    {
      code: "JFK",
      name: "John F Kennedy International",
      distanceFromLPL: 5326,
      distanceFromBOH: 5486,
    },
    {
      code: "ORY",
      name: "Paris-Orly",
      distanceFromLPL: 629,
      distanceFromBOH: 379,
    },
    {
      code: "MAD",
      name: "Adolfo Suarez Madrid-Barajas",
      distanceFromLPL: 1428,
      distanceFromBOH: 1151,
    },
    {
      code: "AMS",
      name: "Amsterdam Schiphol",
      distanceFromLPL: 526,
      distanceFromBOH: 489,
    },
    {
      code: "CAI",
      name: "Cairo International",
      distanceFromLPL: 3779,
      distanceFromBOH: 3584,
    },
  ],
  uk: [
    { code: "LPL", name: "John Lennon" },
    { code: "BOH", name: "Bournemouth International" },
  ],
};

export const airportReducer: Reducer<AirportState> = (
  state = initialState,
  action: AirportAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};
