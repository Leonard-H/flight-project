import React from "react";
import Center from "../components/Center";
import { Link } from "react-router-dom";
import { SET_CURRENT_FORM_PAGE, UIAction } from "../actions/uiActions";
import { Dispatch } from "redux";
import { Page } from "../reducers/uiReducer";
import { connect } from "react-redux";

type Props = { setPage: (page: Page) => void };
const Start: React.FC<Props> = ({ setPage }) => {
  return (
    <Center style={{ height: 100 }}>
      <Link
        to="/form/set-airports"
        className="btn btn-primary"
        onClick={() => setPage(Page.setAirports)}
      >
        Start
      </Link>
    </Center>
  );
};

function mapDispatchToProps(dispatch: Dispatch<UIAction>) {
  return {
    setPage: (page: Page) =>
      dispatch({ type: SET_CURRENT_FORM_PAGE, payload: { page } })
  };
}

export default connect(null, mapDispatchToProps)(Start);
