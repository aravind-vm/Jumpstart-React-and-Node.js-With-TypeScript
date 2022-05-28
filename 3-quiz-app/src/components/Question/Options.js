import React from "react";
import styled from "styled-components";

const OptionCont = styled.h3`
  margin: 1rem 0rem;
  padding: 1rem 1rem;
  background-color: gray;
  width: 60%;
  font-weight: 400;
`;

const Options = (props) => {
  return (
    <>
      <OptionCont>{props.item}</OptionCont>
    </>
  );
};

export default Options;
