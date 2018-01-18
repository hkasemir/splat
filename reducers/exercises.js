import {makeExerciseKey} from '../helpers/storage-helper';
import {types} from '../actions';

export default function exercises(state={}, action) {
  switch(action.type) {
    case types.RECEIVE_EXERCISES:
      return action.payload;
    case types.ADD_EXERCISE:
      return {
        ...state,
        [makeExerciseKey(action.payload.title)]: action.payload
      };
    case types.ADD_MEASUREMENT:
      const {exercise, measurement} = action.payload;
      return {
        ...state,
        [makeExerciseKey(exercise.title)]: {
          ...exercise,
          measurements: [...state[makeExerciseKey(exercise.title)].measurements, measurement]
        }
      };
    default:
      return state;
  }
}
