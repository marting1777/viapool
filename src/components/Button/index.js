import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./styles";

function Button({ btnLabel, btnType, disabled }) {
  return (
    <StyledButton type={btnType} disabled={disabled}>
      {btnLabel}
    </StyledButton>
  );
}

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  btnType: PropTypes.string,
  btnLabel: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
