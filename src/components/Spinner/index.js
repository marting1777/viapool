import React from "react";
import Loader from "react-loader-spinner";
import { blueViaPool } from "../../constants/colors";

function Spinner() {
  return <Loader type="Puff" color={blueViaPool} height={100} width={100} />;
}

export default Spinner;
