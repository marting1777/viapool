import React from "react";
import PropTypes from "prop-types";
import { StyledInput } from "./styles";

const Input = ({
  inputtype,
  elementConfig,
  value,
  changed,
  invalid,
  shouldValidate,
  touched,
}) => {
  let inputElement = null;

  switch (inputtype) {
    case "input":
      inputElement = (
        <StyledInput
          {...elementConfig}
          value={value}
          onChange={changed}
          invalid={invalid && shouldValidate && touched}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          {...elementConfig}
          value={value}
          onChange={changed}
          invalid={invalid && shouldValidate && touched}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          value={value}
          onChange={changed}
          invalid={invalid && shouldValidate && touched}
        >
          {elementConfig.options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.displayValue}
              </option>
            );
          })}
        </select>
      );
      break;
    default:
      inputElement = (
        <StyledInput
          {...elementConfig}
          value={value}
          onChange={changed}
          invalid={invalid && shouldValidate && touched}
        />
      );
  }

  return inputElement;
};

Input.propTypes = {
  inputtype: PropTypes.string,
  elementConfig: PropTypes.shape({}),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  changed: PropTypes.func,
  invalid: PropTypes.bool,
  shouldValidate: PropTypes.shape({}),
  touched: PropTypes.bool,
};

export default Input;
