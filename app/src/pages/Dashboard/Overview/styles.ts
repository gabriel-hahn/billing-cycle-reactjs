import styled from 'styled-components';

import { device } from '../../../styles/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AmountContainer = styled.div`
  display: flex;
  margin: 1em;

  @media ${device.mobileG} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0.7em;
  }
`;

export const TransactionsContainer = styled.div`
  margin: 1em 2.25em;

  @media ${device.mobileG} {
    margin: 0 0.7em 2em;
    display: flex;
    overflow-y: hidden;
  }
`;
