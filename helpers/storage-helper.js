import {AsyncStorage} from 'react-native';
/*
 * storage format:
{
  event_name: {
    title: 'Event Name',
    isPrHigh: true,
    best: 200,
    units: 'lbs',
    measurements: [
      {
        date: '1/1/2018',
        note: '3x3 @65%',
        measure: 140
      }
    ]
  }
}
 *
 *
 *
 */

const STORAGE_KEY = 'SPLAT_STORAGE_KEY';

export function createExercise({title, units, isPrHigh}) {
  return {
    title,
    isPrHigh,
    units,
    best: null,
    measurements: []
  };
}

export function makeExerciseKey(title) {
  return title.toLowerCase().replace(' ', '_');
}

export default {
  getExercises() {
    console.log('getting exercises')
    return AsyncStorage.getItem(STORAGE_KEY)
    .then((results) => {
      console.log(results)
      return JSON.parse(results) || {};
    }).catch(err => console.log(err));
  },
  getExercise(title) {
    return AsyncStorage.getItem(STORAGE_KEY)
    .then((results) => {
      const exercises = JSON.parse(results) || {};
      return exercises[makeExerciseKey(title)];
    });
  },
  saveNewExercise(exercise) {
    console.log(exercise)
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
      [makeExerciseKey(exercise.title)]: exercise
    })).catch(err => console.log('storage error:', err));
  },
  addExerciseMeasurement(exercise, measurement) {
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
      [makeExerciseKey(exercise.title)]: {
        measurements: [...exercise.measurements, measurement]
      }
    }));
  }
}
