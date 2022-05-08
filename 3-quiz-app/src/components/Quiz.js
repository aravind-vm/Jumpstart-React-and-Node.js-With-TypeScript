import React from "react";
import styled from "styled-components";
import Question from "./Question";

const Header = styled.h1`
  color: black;
  font-weight: bolder;
  margin: 1rem;
`;
const MainContainer = styled.div`
  margin: 2rem;
`;
const QuestionListContainer = styled.div`
  margin: 1rem;
`;
const Footer = styled(Header)`
  font-weight: bold;
  margin-top: 2rem;
`;
const quizList = [
  {
    question: "1. Sun rises in the _ _ _",
    options: ["North", "South", "East", "West"],
    id: 1,
  },
  {
    question: "2. Largest ocean is _ _ _",
    options: ["Pacif Ocean", "Indian Ocean", "Atlantic Ocean", "Artic Ocean"],
    id: 2,
  },
  {
    question: "3. Canada is in which continent _ _ _",
    options: ["Asia", "Africa", "North America", "South America"],
    id: 3,
  },
];
const Quiz = () => {
  const quizContent = quizList.map((question) => (
    <Question question={question} key={question.id}></Question>
  ));
  return (
    <MainContainer>
      <Header>Quiz</Header>
      <QuestionListContainer>{quizContent}</QuestionListContainer>
      <Footer>Your Score: 15 Points</Footer>
    </MainContainer>
  );
};

export default Quiz;
