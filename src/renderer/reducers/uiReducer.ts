import { Reducer } from "redux";
import { UIAction, SET_CURRENT_FORM_PAGE } from "../actions/uiActions";
import { produce } from "immer";

export enum Page {
  setAirports,
  setAircraft,
  setSeats
}

export interface UIState {
  form: {
    pages: { id: Page; last: string; next: string }[];
    currentPage: Page | null;
  };
}

const initialState: UIState = {
  form: {
    pages: [
      { id: Page.setAirports, last: "/form", next: "/form/set-aircraft" },
      {
        id: Page.setAircraft,
        last: "/form/set-airports",
        next: "/form/set-seats"
      },
      { id: Page.setSeats, last: "/form/set-aircraft", next: "" }
    ],
    currentPage: null
  }
};

export const uiReducer: Reducer<UIState, UIAction> = (
  state = initialState,
  action: UIAction
) => {
  switch (action.type) {
    case SET_CURRENT_FORM_PAGE:
      return produce(state, state => {
        state.form.currentPage = action.payload.page;
      });
    default:
      return state;
  }
};
