import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

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

  render() {
    const {title} = this.props.navigation.state.params.deck;
    const deck = this.props.decks[title];
    return (
      <View>
        <Text>{title} Quiz View</Text>
        {
          deck.questions.map(item => (
            <Text key={item.question}>{item.question}</Text>
          ))
        }
      </View>
    );
  }
}

