import React from 'react';
import {connect} from 'react-redux';
import {KeyboardAvoidingView, Switch} from 'react-native';
import styled from 'styled-components/native';
import storageHelper, {createExercise} from '../helpers/storage-helper';
import {addExercise} from '../actions';

const TitleInput = styled.TextInput`
  align-self: stretch;
  margin: 30px 30px 0 30px;
  padding: 10px;
  font-size: 30px;
  text-decoration-line: none;
`;

const UnitsInput = styled.TextInput`
  align-self: stretch;
  margin: 10px 30px;
  padding: 10px;
  font-size: 24px;
  text-decoration-line: none;
`;

const FlexView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 30px;
`;

const PrExplainer = styled.Text`
  font-size: 18px;
`;

const SubmitButton = styled.TouchableOpacity`
  align-self: stretch;
  background-color: purple;
  padding: 20px;
  margin: 20px 30px;
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

  togglePrSwitch = (value) => {
    this.setState({isPrHigh: value});
  }

  handleSubmit = () => {
    const exercise = createExercise(this.state);
    storageHelper.saveNewExercise(exercise).then(() => {
      this.props.addExercise(exercise);
      this.props.navigation.navigate('ExerciseView', {exercise});
    });
    this.setState(DEFAULT_STATE);
  }

  render() {
    const {isPrHigh, title, units} = this.state;
    return (
      <KeyboardAvoidingView behavior='padding'>
        <TitleInput
          value={title}
          placeholder='New Exercise Title'
          onChangeText={title => this.setState({title})}
        />
        <UnitsInput
          value={units}
          placeholder='units'
          autoCapitalize='none'
          onChangeText={units => this.setState({units})}
        />
        <FlexView>
          <PrExplainer>
            Best is {
            isPrHigh
            ?
            'high (distance, weight)'
            :
            'low (time)'
            }
          </PrExplainer>
          <Switch
            value={isPrHigh}
            thumbTintColor='white'
            onTintColor='purple'
            onValueChange={this.togglePrSwitch}
          />
        </FlexView>
        <SubmitButton onPress={this.handleSubmit}>
          <SubmitText>Submit</SubmitText>
        </SubmitButton>
      </KeyboardAvoidingView>
    );
  }
}
