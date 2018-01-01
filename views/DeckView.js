import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';

const StyledButton = styled.TouchableOpacity`
  background-color: #fff;
  align-self: stretch;
  align-items: center;
  border-radius: 8px;
  padding: 20px;
  margin: 8px;
`;

export default class DeckView extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {deck} = navigation.state.params;
    return {
      title: `${deck.title}`
    };
  }

  render() {
    const {
      navigation: {
        navigate,
        state: {
          params: {
            deck
          }
        }
      }
    } = this.props;
    return (
      <View>
        <StyledButton onPress={() => navigate('Quiz', {deck})}>
          <Text>Start Quiz</Text>
        </StyledButton>
        <StyledButton onPress={() => navigate('NewQuestion', {deck})}>
          <Text>Add Question</Text>
        </StyledButton>
      </View>
    );
  }
}
