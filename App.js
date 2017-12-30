import React from 'react';
import DeckListItem from './components/DeckListItem.js';
import styled from 'styled-components/native';

const HomeView = styled.View`
  flex: 1;
  background-color: #eee;
  align-items: center;
  justify-content: flex-start;
`;

export default class App extends React.Component {
  render() {
    return (
      <HomeView>
        <DeckListItem />
        <DeckListItem />
      </HomeView>
    );
  }
}
