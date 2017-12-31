import React from 'react';
import {View, StatusBar} from 'react-native';
import Stack from './components/Stack';
import {Constants} from 'expo';

function CustomStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}


export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <CustomStatusBar backgroundColor='purple' barStyle='light-content' />
        <Stack />
      </View>
    );
  }
}
