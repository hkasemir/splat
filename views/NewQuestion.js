import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
import styled from 'styled-components/native';
import storageHelper from '../helpers/storage-helper';

const QuestionInput = styled.TextInput`
  align-self: stretch;
  margin: 20px;
  padding: 10px;
  font-size: 20px;
  text-decoration-line: none;
`;

const SubmitButton = styled.TouchableOpacity`
  align-self: stretch;
  background-color: purple;
  padding: 20px;
  margin: 20px;
  align-items: center;
  border-radius: 6px;
`;

const SubmitText = styled.Text`
  color: white;
  font-size: 20px;
`;

export default class NewQuestion extends React.Component {
  state = {
    question: '',
    answer: ''
  }

  static navigationOptions = ({navigation}) => {
    const {deck} = navigation.state.params;
    return {
      title: `Add question to ${deck.title}`
    };
  }

  handleSubmit = () => {
    const {deck} = this.props.navigation.state.params;
    const {question, answer} = this.state;
    storageHelper.addCardToDeck(deck, {question, answer})
    .then(() => {
      this.setState({
        question: '',
        answer: ''
      });
      this.props.navigation.goBack();
    });
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding'>
        <QuestionInput
          placeholder='Question'
          onChangeText={question => this.setState({question})}
        />
        <QuestionInput
          placeholder='Answer'
          onChangeText={answer => this.setState({answer})}
        />
        <SubmitButton onPress={this.handleSubmit}>
          <SubmitText>Submit</SubmitText>
        </SubmitButton>
      </KeyboardAvoidingView>
    );
  }
}
