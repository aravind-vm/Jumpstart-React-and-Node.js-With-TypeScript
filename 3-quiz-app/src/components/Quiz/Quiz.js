import React from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Question from "../Question/Question";
import { MainContainer, QuestionListContainer } from "./Quiz.styled";

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
      <Header />
      <QuestionListContainer>{quizContent}</QuestionListContainer>
      <Footer />
    </MainContainer>
  );
};

export default Quiz;
