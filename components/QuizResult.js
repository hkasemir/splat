import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Card = styled.View`
  background-color: #fff;
  align-self: stretch;
  align-items: center;
  border-radius: 8px;
  height: 88%;
  margin: 20px;
  padding: 40px 20px;
`;

const AnswerButton = styled.TouchableOpacity`
  background-color: #ddd;
  align-self: stretch;
  align-items: center;
  border-radius: 8px;
  padding: 20px;
  margin: 8px;
`;

const Question = styled.Text`
  font-size: 30px;
  color: green;
`;

export default function QuizResult({onStartOver, onGoBack, correctTally, questionCount}) {
  return (
    <Card>
      <Question>{correctTally} out of {questionCount} correct!</Question>
      <AnswerButton onPress={onStartOver}><Text>Take the quiz again</Text></AnswerButton>
      <AnswerButton onPress={onGoBack}><Text>Back to deck</Text></AnswerButton>
    </Card>
  );
}

