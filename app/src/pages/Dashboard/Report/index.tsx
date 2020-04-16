import React, { useState } from 'react';

import LineChart from '../../../components/LineChart';
import BarChart from '../../../components/BarChart';
import PieChart from '../../../components/PieChart';

import { Container, NoChartsTitle, BottomContainer } from './styles';

export interface ChartDataProps {
  onEmpty: () => void;
}

const Report = () => {
  const [emptyChart, setEmptyChart] = useState<boolean>(false);

  const onEmpty = () => {
    setEmptyChart(true);
  };

  return (
    <Container>
      { emptyChart ? (
        <NoChartsTitle>No data yet. Please add some transactions first.</NoChartsTitle>
      ) : (
        <>
          <LineChart onEmpty={onEmpty} />
          <BottomContainer>
            <BarChart onEmpty={onEmpty} />
            <PieChart onEmpty={onEmpty} />
          </BottomContainer>
        </>
      ) }
    </Container>
  );
};

export default Report;
