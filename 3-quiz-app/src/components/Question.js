import React from "react";
import styled from "styled-components";
import Options from "./Options";

const QuestionCont = styled.h3`
  margin-bottom: 3rem;
  margin-top: 3rem;
`;

const Question = (props) => {
  const optionsContent = props.question.options.map((option) => (
    <Options item={option} key={option}></Options>
  ));
  return (
    <>
      <QuestionCont>{props.question.question}</QuestionCont>
      {optionsContent}
    </>
  );
};

export default Question;
