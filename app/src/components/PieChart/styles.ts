import styled from 'styled-components';

import { device } from '../../styles/variables';

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;

  @media ${device.laptopM}, ${device.heightMobileL}, ${device.minlaptopG} {
    width: unset;
  }
`;

Loading.displayName = 'Loading';
