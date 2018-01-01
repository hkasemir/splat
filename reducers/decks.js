export default function decks(state={}, action) {
  switch(action.type) {
    case 'RECEIVE_DECKS':
      return action.payload;
    case 'ADD_DECK':
      return {
        ...state,
        [action.payload.title]: action.payload
      };
    case 'ADD_CARD':
      const {deck, card} = action.payload;
      return {
        ...state,
        [deck.title]: {
          questions: [...deck.questions, card]
        }
      };
    default:
      return state;
  }
}
