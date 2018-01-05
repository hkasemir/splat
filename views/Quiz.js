import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import QuizCard from '../components/QuizCard';
import QuizResult from '../components/QuizResult';
import {
  clearLocalNotification,
  setLocalNotification
} from '../helpers/notification-helper';
import styled from 'styled-components/native';

const Legend = styled.Text`
  font-style: italic;
  align-self: center;
`;

const mapStateToProps = (state) => ({
  decks: state.decks
});

@connect(mapStateToProps)
export default class Quiz extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {deck} = navigation.state.params;
    return {
      title: `${deck.title} quiz`
    };
  }

  state = {
    questionIndex: 0,
    correctTally: 0,
    finished: false
  }

  handleCorrect = () => {
    this.setState(prevState => ({correctTally: prevState.correctTally + 1}));
    this.handleAdvance();
  }

  handleAdvance = () => {
    const {title} = this.props.navigation.state.params.deck;
    const deck = this.props.decks[title];
    const {questionIndex} = this.state;

    if (questionIndex === deck.questions.length - 1) {
      this.setState({
        questionIndex: 0,
        finished: true
      });
    } else {
      this.setState(prevState => ({questionIndex: prevState.questionIndex + 1}));
    }
  }

  // if the user completes a quiz, clear notifications and set a new one up for tomorrow

  render() {
    const {title} = this.props.navigation.state.params.deck;
    const deck = this.props.decks[title];
    const {questionIndex, correctTally, finished} = this.state;
    const question = deck.questions[questionIndex];
    return (
      <View>
        { finished
          ?
          <Text>Done! {correctTally} correct</Text>
          :
          <View>
            <QuizCard
              question={question}
              onCorrect={this.handleCorrect}
              onAdvance={this.handleAdvance}
            />
            <Legend>Question {questionIndex + 1} of {deck.questions.length}</Legend>
          </View>
        }
      </View>
    );
  }
}

