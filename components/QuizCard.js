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

const CorrectButton = styled.TouchableOpacity`
  background-color: #a7e2da;
  align-self: stretch;
  align-items: center;
  border-radius: 8px;
  padding: 20px;
  margin: 8px;
`;

const WrongButton = styled.TouchableOpacity`
  background-color: #dd98a3;
  align-self: stretch;
  align-items: center;
  border-radius: 8px;
  padding: 20px;
  margin: 8px;
`;

const Question = styled.Text`
  font-size: 30px;
  color: purple;
`;

const Answer = styled.Text`
  font-size: 20px;
  font-style: italic;
  color: gray;
`;

function Front({onPress, question}) {
  return (
    <Card>
      <Question>{question.question}</Question>
      <AnswerButton onPress={onPress}><Text>Show Answer</Text></AnswerButton>
    </Card>
  );
}

function Back({onCorrect, onWrong, question}) {
  return (
    <Card>
      <Question>{question.question}</Question>
      <Answer>{question.answer}</Answer>
      <CorrectButton onPress={onCorrect}><Text>Correct!</Text></CorrectButton>
      <WrongButton onPress={onWrong}><Text>Oops</Text></WrongButton>
    </Card>
  );
}

export default class QuizCard extends React.Component {
  state = {
    front: true
  }

  handleCorrect = () => {
    this.setState({front: true});
    this.props.onCorrect();
  }

  handleWrong = () => {
    this.setState({front: true});
    this.props.onAdvance();
  }

  render() {
    const {question} = this.props;
    const {front} = this.state;
    return front
    ? <Front question={question} onPress={() => this.setState({front: false})} />
    : <Back question={question} onCorrect={this.handleCorrect} onWrong={this.handleWrong} />
  }
}

