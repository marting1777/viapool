import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  padding: 0 15px;
`;

function Container({ children, stylesClass }) {
  return <StyledContainer className={stylesClass}>{children}</StyledContainer>;
}

Container.defaultProps = {
  stylesClass: "",
};

Container.propTypes = {
  children: PropTypes.any.isRequired,
  stylesClass: PropTypes.string,
};

export default Container;
