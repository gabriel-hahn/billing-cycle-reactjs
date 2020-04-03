import styled from 'styled-components';

import { globalVariables } from '../../styles/variables';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${globalVariables.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;
