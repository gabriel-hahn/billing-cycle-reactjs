import styled, { keyframes } from 'styled-components';

import { globalVariables, device } from '../../styles/variables';

export const Container = styled.div`
  display: flex;
  height: 100%;

  @media ${device.mobileL} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const FormContainer = styled.div`
  background: ${globalVariables.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media ${device.mobileL} {
    flex: none;
  }
`;

export const AnimationContainer = styled.div`
  background: ${globalVariables.mainBlue};
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;

  @media ${device.mobileL} {
    flex: none;
    justify-content: center;
    align-items: flex-end;
    background: ${globalVariables.white};
  }

  @media ${device.mobileL} {
    margin-bottom: 20px;
  }
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
  height: auto;
  width: 55%;

  @media ${device.tabletG} {
    width: 65%;
  }

  @media ${device.mobileL} {
    width: 55%;
  }
`;

export const Title = styled.h3`
  color: ${globalVariables.mainBlue};
  font-size: 34px;
  font-weight: 100;
  margin-bottom: 15px;

  @media ${device.tablet} {
    font-size: 30px;
  }

  @media ${device.mobileL} {
    display: none;
  }
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

  @media ${device.tablet} {
    font-size: 12px;
    width: 220px;
    padding: 10px 10px 10px 40px;

    &::-webkit-input-placeholder {
      font-size: 12px;
    }
  }
`;

const sharedButtonStyle = styled.button`
  font-size: 14px;
  text-transform: uppercase;
  display: inline-block;
  max-width: 300px;
  margin: 5px;

  @media ${device.tablet} {
    max-width: 220px;
    font-size: 12px;
    padding: 5px 0;
    height: 40px;
  }
`;

export const LoginButton = styled(sharedButtonStyle)`
  background: ${globalVariables.mainBlue};
  color: ${globalVariables.white};
  padding: 12px 15px;
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

  @media ${device.tablet} {
    width: 230px;
  }
`;

export const IconsContainer = styled.div`
  position: absolute;
  margin: 20px;
  color: ${globalVariables.mainBlue};

  @media ${device.tablet} {
    margin: 16.5px;
  }
`;

AnimationContainer.displayName = 'AnimationContainer';
LoginButton.displayName = 'LoginButton';
Input.displayName = 'Input';
