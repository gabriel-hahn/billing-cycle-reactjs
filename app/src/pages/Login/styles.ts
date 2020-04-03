import styled, { keyframes } from 'styled-components';

import { globalVariables } from '../../styles/variables';

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const FormContainer = styled.div`
  background: ${globalVariables.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const AnimationContainer = styled.div`
  background: ${globalVariables.mainBlue};
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UpAndDownAnimation = keyframes`
  from {
    top: -10px;
  }
  to {
    top: 10px;
  }
`;

export const Animation = styled.div`
  position: relative;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-name: ${UpAndDownAnimation};
`;

export const Title = styled.h3`
  color: ${globalVariables.mainBlue};
  font-size: 34px;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  margin: 5px;
  padding: 15px 15px 15px 40px;
  width: 300px;
  border: 1px solid ${globalVariables.mainBlue};
  border-radius: 5px;
  font-size: 14px;

  &::-webkit-input-placeholder {
    color: ${globalVariables.mainBlue};
    font-size: 14px;
  }
`;

const sharedButtonStyle = styled.button`
  font-size: 14px;
  text-transform: uppercase;
  display: inline-block;
  max-width: 300px;
  margin: 5px;
`;

export const RegisterButton = styled(sharedButtonStyle)`
  background: ${globalVariables.white};
  color: ${globalVariables.mainBlue};
  padding: 12px 115px;
  border: none;
  transition: all 0.3s;

  &:hover {
    color: ${globalVariables.mainBlueHover};
  }
`;

export const LoginButton = styled(sharedButtonStyle)`
  background: ${globalVariables.mainBlue};
  color: ${globalVariables.white};
  padding: 12px 115px;
  border-radius: 5px;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  height: 45px;

  &:hover {
    background: ${globalVariables.mainBlueHover};
  }
`;

export const FormInputs = styled.form`
  display: flex;
  flex-direction: column;
`;

export const IconsContainer = styled.div`
  position: absolute;
  margin: 20px;
  color: ${globalVariables.mainBlue};
`;
