import React from 'react';

import { RotateSpinner } from 'react-spinners-kit';

import { Container } from './styles';

const PageLoading = () => (
  <Container>
    <RotateSpinner size={50} color="#4D7C8A" />
  </Container>
);

export default PageLoading;
