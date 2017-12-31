import React from 'react';
import {View, Text} from 'react-native';

export default function NewQuestion({navigation}) {
  const {deck} = navigation.state.params;
  return (
    <View>
      <Text>New Question View for {deck}</Text>
    </View>
  );
}

