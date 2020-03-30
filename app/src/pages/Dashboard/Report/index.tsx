import React from 'react';

import LineChart from '../../../components/LineChart';
import BarChart from '../../../components/BarChart';
import PieChart from '../../../components/PieChart';

import { Container, BottomContainer } from './styles';

const Report = () => (
  <Container>
    <LineChart />
    <BottomContainer>
      <BarChart />
      <PieChart />
    </BottomContainer>
  </Container>
);

export default Report;
