import React from 'react';
import HomeView from '../components/HomeView';
import DeckListItem from '../components/DeckListItem.js';

export default function DeckList({navigation}) {
  return (
    <HomeView>
      <DeckListItem deck='React' onPress={(deck) => navigation.navigate('DeckView', {deck})}/>
      <DeckListItem />
    </HomeView>
  );
}
