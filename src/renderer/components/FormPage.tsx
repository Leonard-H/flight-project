import Button from "react-bootstrap/Button";
import React from "react";
import { Dispatch } from "redux";
import { RouterProps } from "react-router";
import { connect } from "react-redux";

import makeGetNextButtonEnabled from "../computedValues/computedUIValues";

import { Page } from "../reducers/uiReducer";

import { RootState } from "../reducers";

import { UIAction, SET_CURRENT_FORM_PAGE } from "../actions/uiActions";

const FormPage = (Component: React.FC<RouterProps>) => {
  return connect(
    makeMapStateToProps,
    mapDispatchToProps
  )(
    (
      props: RouterProps & {
        nextButtonDisabled: boolean;
        last: Page | undefined;
        next: Page | undefined;
        setPage: (page: Page) => void;
      }
    ) => {
      const handleBack = () => {
        if (!props.last) return;
        props.history.push(props.last);
        props.setPage(props.last);
      };
      const handleForward = () => {
        if (!props.next) return;
        props.history.push(props.next);
        props.setPage(props.next);
      };
      return (
        <div>
          <div>
            <Button style={{ float: "left" }} onClick={handleBack}>
              {"<"}
            </Button>
            <Button
              style={{ float: "right" }}
              onClick={handleForward}
              disabled={props.nextButtonDisabled}
            >
              {">"}
            </Button>
          </div>
          <Component {...props} />
        </div>
      );
    }
  );
};

function makeMapStateToProps() {
  const getNextButtonDisabled = makeGetNextButtonEnabled();
  return (state: RootState) => {
    return {
      nextButtonDisabled: getNextButtonDisabled(state),
      last: state.ui.form.pages.find(
        page => page.id === state.ui.form.currentPage
      )?.last,
      next: state.ui.form.pages.find(
        page => page.id === state.ui.form.currentPage
      )?.next
    };
  };
}

function mapDispatchToProps(dispatch: Dispatch<UIAction>) {
  return {
    setPage: (page: Page) =>
      dispatch({ type: SET_CURRENT_FORM_PAGE, payload: { page } })
  };
}

export default FormPage;
