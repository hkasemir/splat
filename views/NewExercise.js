import React from 'react';
import {connect} from 'react-redux';
import {KeyboardAvoidingView} from 'react-native';
import styled from 'styled-components/native';
import storageHelper, {createExercise} from '../helpers/storage-helper';
import {addExercise} from '../actions';

const TitleInput = styled.TextInput`
  align-self: stretch;
  margin: 30px;
  padding: 10px;
  font-size: 30px;
  text-decoration-line: none;
`;
const UnitsInput = styled.TextInput`
  align-self: stretch;
  margin: 24px;
  padding: 10px;
  font-size: 24px;
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
  addExercise
};

const DEFAULT_STATE = {
  title: '',
  isPrHigh: true,
  units: ''
};

@connect(null, mapDispatchToProps)
export default class NewExercise extends React.Component {
  state = DEFAULT_STATE

  handleSubmit = () => {
    this.setState(DEFAULT_STATE);
    storageHelper.saveNewExercise(this.state).then(() => {
      const exercise = createExercise(this.state);
      this.props.addExercise(exercise);
      this.props.navigation.navigate('ExerciseView', {exercise});
    });
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding'>
        <TitleInput
          placeholder='New Exercise Title'
          onChangeText={title => this.setState({title})}
        />
        <UnitsInput
          placeholder='units'
          onChangeText={units => this.setState({units})}
        />
        <SubmitButton onPress={this.handleSubmit}>
          <SubmitText>Submit</SubmitText>
        </SubmitButton>
      </KeyboardAvoidingView>
    );
  }
}
