import styled from 'styled-components';

import { StylesProps } from './index';

export const Container = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.55);
  height: 100vh;
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background: #FFF;
  height: 600px;
  width: 500px;
  border-radius: 5px;
`;

export const Button = styled.button`
  height: 40px;
  width: 150px;
  background: ${(props: StylesProps) => (props.transparent ? '#FFF' : '#1D84B5')};
  color: ${(props: StylesProps) => (props.transparent ? '#1D84B5' : '#FFF')};
  font-size: 16px;
  border-radius: 5px;
`;
