import React from "react";
import FormPage from "../components/FormPage";
import { Page } from "../reducers/uiReducer";

type Props = {};
const SetSeats: React.FC<Props> = () => {
  return <div>set seats</div>;
};

export default FormPage(SetSeats, Page.setSeats);
