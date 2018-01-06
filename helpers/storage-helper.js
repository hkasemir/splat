import {AsyncStorage} from 'react-native';
/*
 * storage format:
{
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      }
    ]
  }
}
 *
 *
 *
 */

const STORAGE_KEY = 'STUDY_BUDDY_STORAGE_KEY';

export function createDeck(title) {
  return {
    title,
    questions: []
  };
}

export default {
  getDecks() {
    return AsyncStorage.getItem(STORAGE_KEY)
    .then((results) => {
      return JSON.parse(results) || {};
    });
  },
  getDeck(title) {
    return AsyncStorage.getItem(STORAGE_KEY)
    .then((results) => {
      const decks = JSON.parse(results);
      return decks[key];
    })
  },
  saveDeckTitle(title) {
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
      [title]: createDeck(title)
    }));
  },
  addCardToDeck(deck, card) {
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
      [deck.title]: {
        questions: [...deck.questions, card]
      }
    }));
  }
}
