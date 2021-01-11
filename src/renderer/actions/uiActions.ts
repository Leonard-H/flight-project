import { Action, ActionCreator } from "redux";
import { Page } from "../reducers/uiReducer";

export const SET_CURRENT_FORM_PAGE = "SET_CURRENT_FORM_PAGE";

export interface SetCurrentFormPageAction extends Action {
  type: "SET_CURRENT_FORM_PAGE";
  payload: { page: Page | null };
}

export const setCurrentFormPageAction: ActionCreator<SetCurrentFormPageAction> = (
  page: Page | null
) => ({
  type: SET_CURRENT_FORM_PAGE,
  payload: { page }
});

export type UIAction = SetCurrentFormPageAction;
