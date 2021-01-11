import { Action, ActionCreator } from "redux";

export const SET_UK_AIRPORT = "SET_UK_AIRPORT";
export const SET_OVERSEAS_AIRPORT = "SET_OVERSEAS_AIRPORT";
export const SET_NUMBER_OF_FIRST_CLASS_SEATS =
  "SET_NUMBER_OF_FIRST_CLASS_SEATS";
export const CLEAR = "CLEAR";

export interface SetUkAirportAction extends Action {
  type: "SET_UK_AIRPORT";
}
export interface SetOverseasAirportAction extends Action {
  type: "SET_OVERSEAS_AIRPORT";
}
export interface SetNumberOfFirstClassSeatsAction extends Action {
  type: "SET_NUMBER_OF_FIRST_CLASS_SEATS";
}
export interface ClearAction extends Action {
  type: "CLEAR";
}

export const setUkAirport: ActionCreator<SetUkAirportAction> = () => ({
  type: SET_UK_AIRPORT
});

export const setOverseasAirport: ActionCreator<SetOverseasAirportAction> = () => ({
  type: SET_OVERSEAS_AIRPORT
});
export const setNumberOfFirstClassSeats: ActionCreator<SetNumberOfFirstClassSeatsAction> = () => ({
  type: SET_NUMBER_OF_FIRST_CLASS_SEATS
});
export const clear: ActionCreator<ClearAction> = () => ({
  type: CLEAR
});

export type InputAction =
  | SetUkAirportAction
  | SetOverseasAirportAction
  | SetNumberOfFirstClassSeatsAction
  | ClearAction;
