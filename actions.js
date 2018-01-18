export const types = {
  RECEIVE_EXERCISES: 'RECEIVE_EXERCISES',
  ADD_EXERCISE: 'ADD_EXERCISE',
  ADD_MEASUREMENT: 'ADD_MEASUREMENT'
};

export function receiveExercises(exercises) {
  return {
    type: types.RECEIVE_EXERCISES,
    payload: exercises
  };
}

export function addExercise(exercise) {
  return {
    type: types.ADD_EXERCISE,
    payload: exercise
  };
}

export function addMeasurement(measurement, exercise) {
  return {
    type: types.ADD_MEASUREMENT,
    payload: {measurement, exercise}
  };
}
