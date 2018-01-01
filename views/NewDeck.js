import React from 'react';
import {connect} from 'react-redux';
import {KeyboardAvoidingView} from 'react-native';
import styled from 'styled-components/native';
import storageHelper, {createDeck} from '../helpers/storage-helper';
import {addDeck} from '../actions';

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

@connect()
export default class NewDeck extends React.Component {
  state = {
    title: ''
  }

  handleSubmit = () => {
    const {title} = this.state;
    this.setState({title: ''});
    storageHelper.saveDeckTitle(title).then(() => {
      const deck = createDeck(title);
      this.props.dispatch(addDeck(deck));
      this.props.navigation.navigate('DeckView', {deck});
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
