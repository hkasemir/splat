import React from 'react';
import {View, Text} from 'react-native';

export default class Quiz extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {deck} = navigation.state.params;
    return {
      title: `${deck.title} quiz`
    };
  }

  render() {
    const {deck} = this.props.navigation.state.params;
    return (
      <View>
        <Text>{deck.title} Quiz View</Text>
      </View>
    );
  }
}

