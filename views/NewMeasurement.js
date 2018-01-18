import React from 'react';
import {connect} from 'react-redux';
import {KeyboardAvoidingView} from 'react-native';
import styled from 'styled-components/native';
import storageHelper from '../helpers/storage-helper';
import {addMeasurement} from '../actions';

const MeasurementInput = styled.TextInput`
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

const mapDispatchToProps = {
  addMeasurement
};

@connect(null, mapDispatchToProps)
export default class NewMeasurement extends React.Component {
  state = {
    note: '',
    measure: ''
  }

  static navigationOptions = ({navigation}) => {
    const {exercise} = navigation.state.params;
    return {
      title: `Add measure to ${exercise.title}`
    };
  }

  handleSubmit = () => {
    const {exercise} = this.props.navigation.state.params;
    storageHelper.addExerciseMeasurement(exercise, this.state)
    .then(() => {
      this.props.addMeasurement(this.state, exercise);
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
        <MeasurementInput
          placeholder='Note'
          onChangeText={note => this.setState({note})}
        />
        <MeasurementInput
          placeholder='Measurement'
          onChangeText={measure => this.setState({measure})}
        />
        <SubmitButton onPress={this.handleSubmit}>
          <SubmitText>Submit</SubmitText>
        </SubmitButton>
      </KeyboardAvoidingView>
    );
  }
}
