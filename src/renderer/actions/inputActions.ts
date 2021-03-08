import { Action, ActionCreator } from "redux";

export const SET_UK_AIRPORT = "SET_UK_AIRPORT";
export const SET_OVERSEAS_AIRPORT = "SET_OVERSEAS_AIRPORT";
export const SET_AIRCRAFT_TYPE = "SET_AIRCRAFT_TYPE";
export const SET_NUMBER_OF_FIRST_CLASS_SEATS =
  "SET_NUMBER_OF_FIRST_CLASS_SEATS";
export const CLEAR = "CLEAR";

export interface SetUkAirportAction extends Action {
  type: "SET_UK_AIRPORT";
  payload: { code: string };
}
export interface SetOverseasAirportAction extends Action {
  type: "SET_OVERSEAS_AIRPORT";
  payload: { code: string };
}
export interface SetAircraftId extends Action {
  type: "SET_AIRCRAFT_TYPE";
  payload: { id: string };
}
export interface SetNumberOfFirstClassSeatsAction extends Action {
  type: "SET_NUMBER_OF_FIRST_CLASS_SEATS";
}
export interface ClearAction extends Action {
  type: "CLEAR";
}

export const setUkAirport: ActionCreator<SetUkAirportAction> = (
  code: string
) => ({
  type: SET_UK_AIRPORT,
  payload: { code },
});

export const setOverseasAirport: ActionCreator<SetOverseasAirportAction> = (
  code: string
) => ({
  type: SET_OVERSEAS_AIRPORT,
  payload: { code },
});
export const setAircraftId: ActionCreator<SetAircraftId> = (id: string) => ({
  type: SET_AIRCRAFT_TYPE,
  payload: { id },
});
export const setNumberOfFirstClassSeats: ActionCreator<SetNumberOfFirstClassSeatsAction> = () => ({
  type: SET_NUMBER_OF_FIRST_CLASS_SEATS,
});
export const clear: ActionCreator<ClearAction> = () => ({
  type: CLEAR,
});

export type InputAction =
  | SetUkAirportAction
  | SetOverseasAirportAction
  | SetAircraftId
  | SetNumberOfFirstClassSeatsAction
  | ClearAction;
