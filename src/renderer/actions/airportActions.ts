import { Action, ActionCreator } from "redux";

export const ADD = "ADD";
export const REMOVE = "REMOVE";

export interface AddAction extends Action {
  type: "ADD";
}
export interface RemoveAction extends Action {
  type: "REMOVE";
}

export const add: ActionCreator<AddAction> = () => ({
  type: ADD
});

export const remove: ActionCreator<RemoveAction> = () => ({
  type: REMOVE
});

export type AirportAction = AddAction | RemoveAction;
