import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
import styled from 'styled-components/native';
import storageHelper from '../helpers/storage-helper';

const TitleInput = styled.TextInput`
  align-self: stretch;
  margin: 40px;
  padding: 10px;
  font-size: 40px;
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

export default class NewDeck extends React.Component {
  state = {
    title: ''
  }

  handleSubmit = () => {
    const {title} = this.state;
    storageHelper.saveDeckTitle(title)
    .then(() => {
      this.setState({title: ''});
      this.props.navigation.navigate('DeckView', {deck: title});
    });
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding'>
        <TitleInput
          placeholder='New Deck Title'
          onChangeText={title => this.setState({title})}
        />
        <SubmitButton onPress={this.handleSubmit}>
          <SubmitText>Submit</SubmitText>
        </SubmitButton>
      </KeyboardAvoidingView>
    );
  }
}
