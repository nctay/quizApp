/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Row, Col, Layout } from 'antd';
import { gachiQuiz } from '../../api/gachiQuiz';
import { Question } from '../../components/Question/Question';
import { Answers } from '../../components/Answers/Answers';
export default function HomePage() {
  const { Header, Footer, Sider, Content } = Layout;
  const [counter, setCounter] = useState(0);
  const [points, setPoints] = useState(0);
  const [comment, setComment] = useState(null);
  const question = gachiQuiz.questions[counter];
  const { answers, text, img } = question;
  const handleAnswer = (i, point) => {
    console.log('lol');
    setPoints(points + point);
    setComment(i);
  };
  const handleNext = () => {
    setCounter(counter + 1);
  };
  return (
    <Layout>
      <Header>
        Question : {counter + 1}/{gachiQuiz.questions.length}
        Your points: {points}
      </Header>
      <Content>
        <Question text={text} img={img} />
        <Answers
          answers={answers}
          onAnswer={handleAnswer}
          onNext={handleNext}
          commentN={comment}
        />
      </Content>
      <Footer>(C) MtsBank</Footer>
    </Layout>
  );
}
