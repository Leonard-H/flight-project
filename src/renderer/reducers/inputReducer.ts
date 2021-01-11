import { Reducer } from "redux";
import { InputAction } from "../actions/inputActions";

export interface InputState {
  ukAirport: string;
  overseasAirport: string;
  aircraftType: string;
  numOfFirstClassSeats: number;
  numOfStandardClassSeats: number;
}

const initialState: InputState = {
  ukAirport: "",
  overseasAirport: "",
  aircraftType: "",
  numOfFirstClassSeats: -1,
  numOfStandardClassSeats: -1
};

export const inputReducer: Reducer<InputState> = (
  state = initialState,
  action: InputAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};
