import { Reducer } from "redux";
import {
  InputAction,
  SET_UK_AIRPORT,
  SET_OVERSEAS_AIRPORT,
  SET_AIRCRAFT_TYPE,
  SET_NUMBER_OF_FIRST_CLASS_SEATS,
} from "../actions/inputActions";

export interface InputState {
  ukAirport: string;
  overseasAirport: string;
  aircraftId: string;
  numberOfFirstClassSeats: number;
}

const initialState: InputState = {
  ukAirport: "",
  overseasAirport: "",
  aircraftId: "",
  numberOfFirstClassSeats: -1,
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
    case SET_NUMBER_OF_FIRST_CLASS_SEATS:
      return { ...state, numberOfFirstClassSeats: action.payload.num };
    default:
      return state;
  }
};
