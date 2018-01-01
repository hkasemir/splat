import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components/native';

const DeckCard = styled.TouchableOpacity`
  background-color: #fff;
  align-self: stretch;
  align-items: center;
  border-radius: 8px;
  padding: 20px;
  margin: 8px;
`;

export default function DeckListItem ({onPress, deck}) {
  return (
    <DeckCard onPress={() => onPress(deck)}>
      <Text>{deck.title}</Text>
      <Text>{deck.questions.length} cards</Text>
    </DeckCard>
  );
}
