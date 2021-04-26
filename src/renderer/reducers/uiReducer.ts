import { Reducer } from "redux";
import { UIAction, SET_CURRENT_FORM_PAGE } from "../actions/uiActions";
import { produce } from "immer";

export enum Page {
  start = "/form",
  setAirports = "/form/set-airports",
  setAircraft = "/form/set-aircraft",
  setSeats = "/form/set-seats",
  results = "/results",
}

export interface UIState {
  form: {
    pages: { id: Page; last: Page; next: Page }[];
    currentPage: Page;
  };
}

const initialState: UIState = {
  form: {
    pages: [
      { id: Page.setAirports, last: Page.start, next: Page.setAircraft },
      { id: Page.setAircraft, last: Page.setAirports, next: Page.setSeats },
      { id: Page.setSeats, last: Page.setAircraft, next: Page.results },
    ],
    currentPage: Page.start,
  },
};

export const uiReducer: Reducer<UIState, UIAction> = (
  state = initialState,
  action: UIAction
) => {
  switch (action.type) {
    case SET_CURRENT_FORM_PAGE:
      return produce(state, (state) => {
        state.form.currentPage = action.payload.page;
      });
    default:
      return state;
  }
};
