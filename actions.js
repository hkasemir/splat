export const types = {
  RECEIVE_DECKS: 'RECEIVE_DECKS',
  ADD_DECK: 'ADD_DECK',
  ADD_CARD: 'ADD_CARD'
};

export function receiveDecks(decks) {
  return {
    type: types.RECEIVE_DECKS,
    payload: decks
  };
}

export function addDeck(deck) {
  return {
    type: types.ADD_DECK,
    payload: deck
  };
}

export function addCard(card, deck) {
  return {
    type: types.ADD_CARD,
    payload: {card, deck}
  };
}
