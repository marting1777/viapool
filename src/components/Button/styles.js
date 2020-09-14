import styled from "styled-components";
import { blueViaPool, plainWhite, darkGrey } from "../../constants/colors";

export const StyledButton = styled.button`
  padding: 5px 15px;
  display: block;
  margin: 0 auto;
  font-weight: bold;
  width: 250px;
  cursor: pointer;
  font-size: 18px;
  outline: 0;
  border: none;
  border-radius: 4px;
  color: ${plainWhite};
  background-color: ${blueViaPool};
  &:hover {
    box-shadow: 1px 1px 1px #000;
  }
  &:disabled {
    background-color: #cccccc;
    color: #666666;
    pointer-events: none;
  }
`;
