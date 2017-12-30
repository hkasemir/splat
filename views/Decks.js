import React from 'react';
import HomeView from '../components/HomeView';
import DeckListItem from '../components/DeckListItem.js';

export default function Decks() {
  return (
    <HomeView>
      <DeckListItem />
      <DeckListItem />
    </HomeView>
  );
}
