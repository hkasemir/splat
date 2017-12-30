import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components/native';

const DeckCard = styled.View`
  background-color: #fff;
  align-self: stretch;
  align-items: center;
  border-radius: 8px;
  padding: 20px;
  margin: 8px;
`;

export default function DeckListItem () {
  return (
    <DeckCard>
      <Text>Deck</Text>
      <Text>3 cards</Text>
    </DeckCard>
  );
}
