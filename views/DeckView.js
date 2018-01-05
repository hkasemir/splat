import React from 'react';
import {connect} from 'react-redux'
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

const Title = styled.Text`
  font-size: 30px;
  color: purple;
  align-self: center;
`;

const SubTitle = styled.Text`
  font-size: 24px;
  color: gray;
  align-self: center;
  margin-bottom: 30px;
`;

const mapStateToProps = (state) => ({
  decks: state.decks
});

@connect(mapStateToProps)
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
            deck: {
              title
            }
          }
        }
      },
      decks
    } = this.props;
    const deck = decks[title];
    return (
      <View>
        <Title>{title}</Title>
        <SubTitle>{deck.questions.length} questions</SubTitle>
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
