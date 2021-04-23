import { createSelector } from "reselect";
import { RootState } from "../reducers";
import { Page } from "../reducers/uiReducer";

const getInput = (state: RootState) => state.input;
const getUIFormData = (state: RootState) => state.ui.form;

export const makeGetNextButtonEnabled = () => {
  return createSelector([getInput, getUIFormData], (input, uiFormData) => {
    switch (uiFormData.currentPage) {
      case Page.setAirports:
        return !Boolean(input.ukAirport && input.overseasAirport);
      case Page.setAircraft:
        return !Boolean(input.aircraftId);
      case Page.setSeats:
        return !Boolean(
          input.numberOfFirstClassSeats + 1 ||
            input.numberOfStandardClassSeats + 1
        );
      default:
        return true;
    }
  });
};
