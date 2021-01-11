import { combineReducers } from "redux";

import { InputState, inputReducer } from "./inputReducer";
import { AircraftState, aircraftReducer } from "./aircraftReducer";
import { UIState, uiReducer } from "./uiReducer";

export interface RootState {
  aircraft: AircraftState;
  input: InputState;
  ui: UIState;
}

export const rootReducer = combineReducers<RootState | undefined>({
  aircraft: aircraftReducer,
  input: inputReducer,
  ui: uiReducer
});
