import React from "react";
import Button from "react-bootstrap/Button";
import { RouterProps } from "react-router";
import makeGetNextButtonEnabled from "../computedValues/computedUIValues";
import { RootState } from "../reducers";
import { connect } from "react-redux";

const FormPage = (Component: React.FC<RouterProps>) => {
  return connect(makeMapStateToProps)(
    (props: RouterProps & { nextButtonDisabled: boolean }) => {
      const handleBack = () => {
        props.history.push("");
      };
      const handleForward = () => {};
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
      nextButtonDisabled: getNextButtonDisabled(state)
    };
  };
}

export default FormPage;
