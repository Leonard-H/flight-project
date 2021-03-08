import { Reducer } from "redux";
import {
  InputAction,
  SET_UK_AIRPORT,
  SET_OVERSEAS_AIRPORT,
  SET_AIRCRAFT_TYPE,
} from "../actions/inputActions";

export interface InputState {
  ukAirport: string;
  overseasAirport: string;
  aircraftId: string;
  numOfFirstClassSeats: number;
  numOfStandardClassSeats: number;
}

const initialState: InputState = {
  ukAirport: "",
  overseasAirport: "",
  aircraftId: "",
  numOfFirstClassSeats: -1,
  numOfStandardClassSeats: -1,
};

export const inputReducer: Reducer<InputState> = (
  state = initialState,
  action: InputAction
) => {
  switch (action.type) {
    case SET_UK_AIRPORT:
      return { ...state, ukAirport: action.payload.code };
    case SET_OVERSEAS_AIRPORT:
      return { ...state, overseasAirport: action.payload.code };
    case SET_AIRCRAFT_TYPE:
      return { ...state, aircraftId: action.payload.id };
    default:
      return state;
  }
};
