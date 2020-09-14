import styled from "styled-components";
import { plainWhite } from "../../constants/colors";

export const StyledInput = styled.input`
  outline: none;
  font-size: 16px;
  border: ${(props) => (props.invalid ? "1px solid red" : "1px solid #ccc")};
  background-color: ${(props) => (props.invalid ? "#fda49a" : plainWhite)};
  box-shadow: 1px 1px 1px #000;
  margin: 10px auto;
  font: inherit;
  padding: 10px 10px;
  display: block;
  width: 100%;
  border-radius: 4px;
`;
