import React from 'react';
import {View, Text} from 'react-native';

export default class Quiz extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {deck} = navigation.state.params;
    return {
      title: `${deck} quiz`
    };
  }

  render() {
    const {deck} = this.props.navigation.state.params;
    return (
      <View>
        <Text>{deck} Quiz View</Text>
      </View>
    );
  }
}

