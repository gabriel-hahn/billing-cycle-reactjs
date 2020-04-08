import styled from 'styled-components';

import { globalVariables, device } from '../../styles/variables';
import { AmountPropsInterface } from './index';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 18vh;
  width: 35em;
  border-radius: 5px;
  margin: 0.6em 1.3em;
  background: ${globalVariables.white};
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: ${(props: AmountPropsInterface) => (props.color)};

  @media ${device.laptop} {
    margin: 0.5em 1em;
  }

  @media ${device.tabletG} {
    margin: 0.4em 0.6em;
  }

  @media ${device.mobileG} {
    width: 30em;
    height: 22vh;
  }

  @media ${device.mobileLL} {
    width: 13em;
  }
`;

export const DateItem = styled.p`
  font-size: 12px;

  @media ${device.laptopM} {
    font-size: 12px;
    margin-top: 5px;
  }

  @media ${device.laptopM} {
    font-size: 10px;
    margin-top: 12px;
  }
`;

export const Description = styled.p`
  position: absolute;
  top: 10px;
  left: 10px;

  @media ${device.laptopM} {
    font-size: 14px;
  }

  @media ${device.laptop} {
    font-size: 10px;
  }
`;

export const Value = styled.h2`
  font-size: 2em;
  font-weight: 100;

  @media ${device.laptopM} {
    margin-top: 10px;
    font-size: 1.8em;
  }

  @media ${device.laptop} {
    font-size: 1.4em;
  }

  @media ${device.tabletG} {
    font-size: 1.2em;
  }

  @media ${device.mobileG} {
    font-size: 1.8em;
    margin-top: 14px;
  }
`;

Value.displayName = 'Value';
