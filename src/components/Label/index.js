import React from "react";
import PropTypes from "prop-types";
import { StyledLabel } from "./styles";

function Label({ labelFor, labelText }) {
  return <StyledLabel htmlFor={labelFor}>{labelText}</StyledLabel>;
}

Label.defaultProps = {
  labelText: "",
};

Label.propTypes = {
  labelFor: PropTypes.string.isRequired,
  labelText: PropTypes.string,
};

export default Label;
