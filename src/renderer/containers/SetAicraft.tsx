import React from "react";
import FormPage from "../components/FormPage";
import { Page } from "../reducers/uiReducer";

type Props = {};
const SetAircraft: React.FC<Props> = () => {
  return <div>set aircraft</div>;
};

export default FormPage(SetAircraft, Page.setAircraft);
