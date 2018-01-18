import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const MeasurementCard = styled.View`
  background-color: #fff;
  align-self: stretch;
  align-items: center;
  border-radius: 8px;
  padding: 20px;
  margin: 8px;
`;

export default function MeasurementListItem({measurement, exercise}) {
  return (
    <MeasurementCard>
      <Text>{measurement.date}</Text>
      <Text>{measurement.note}</Text>
      <Text>{measurement.measure} {exercise.units}</Text>
    </MeasurementCard>
  );
}
