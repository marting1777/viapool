import React from "react";
import PropTypes from "prop-types";
import { StyledTitle } from "./styles";

function Title({ titleText }) {
  return <StyledTitle>{titleText}</StyledTitle>;
}

Title.propTypes = {
  titleText: PropTypes.string.isRequired,
};

export default Title;
