import React from 'react';

import { RotateSpinner } from 'react-spinners-kit';

import { globalVariables } from '../../styles/variables';
import { Container } from './styles';

const PageLoading = () => (
  <Container>
    <RotateSpinner size={50} color={globalVariables.mainBlue} />
  </Container>
);

export default PageLoading;
