import React from "react";
import FormPage from "../components/FormPage";
import { Page } from "../reducers/uiReducer";

type Props = {};
const SetAirports: React.FC<Props> = () => {
  return <div>set airports form</div>;
};

export default FormPage(SetAirports, Page.setAirports);
