import React from "react";
import Center from "../components/Center";
import { Link } from "react-router-dom";

type Props = {};
const Start: React.FC<Props> = () => {
  return (
    <Center style={{ height: 100 }}>
      <Link to="/form/set-airports" className="btn btn-primary">
        Start
      </Link>
    </Center>
  );
};

export default Start;
