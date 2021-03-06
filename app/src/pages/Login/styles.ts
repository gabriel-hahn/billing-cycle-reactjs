import styled, { keyframes } from 'styled-components';

import { globalVariables, device } from '../../styles/variables';

interface PropsInterface {
  disabled?: boolean;
}

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
  position: relative;

  @media ${device.mobileL} {
    justify-content: unset;
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
`;

export const Title = styled.h3`
  color: ${globalVariables.mainBlue};
  font-size: 36px;
  font-weight: 100;
  margin-bottom: 20px;

  @media ${device.tablet} {
    font-size: 32px;
  }

  @media ${device.mobileL} {
    display: none;
  }
`;

export const ResetTitle = styled.h3`
  color: ${globalVariables.mainBlue};
  font-size: 18px;
  font-weight: 100;

  @media ${device.tablet} {
    font-size: 22px;
  }
`;

export const Input = styled.input`
  margin: 5px;
  padding: 15px 15px 15px 40px;
  width: 300px;
  border: 1px solid ${globalVariables.mainBlue};
  border-radius: 5px;
  font-size: 16px;

  &::-webkit-input-placeholder {
    color: ${globalVariables.mainBlue};
    font-size: 16px;
  }

  @media ${device.tablet} {
    width: 280px;
    padding: 14px 14px 10px 40px;
  }
`;

const sharedButtonStyle = styled.button`
  font-size: 16px;
  text-transform: uppercase;
  display: inline-block;
  max-width: 300px;
  margin: 5px;

  @media ${device.tablet} {
    max-width: 280px;
    padding: 5px 0;
    height: 40px;
  }
`;

export const RegisterButton = styled(sharedButtonStyle)`
  background: ${globalVariables.white};
  color: ${globalVariables.mainBlue};
  padding: 8px 115px;
  border: none;
  transition: all 0.3s;
  margin: 0;

  &:hover {
    color: ${globalVariables.mainBlueHover};
  }

  @media ${device.mobileL} {
    height: unset;
  }
`;

export const LoginButton = styled(sharedButtonStyle)`
  background: ${(props: PropsInterface) => (props.disabled ? `${globalVariables.mainBlueLigth}` : `${globalVariables.mainBlue}`)};
  pointer-events: ${(props: PropsInterface) => (props.disabled ? 'none' : 'all')};
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

  @media ${device.tablet} {
    width: 290px;
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

export const ForgotButton = styled(sharedButtonStyle)`
  background: ${globalVariables.white};
  color: ${globalVariables.mainBlue};
  padding: 8px 15px;
  border: none;
  transition: all 0.3s;
  margin: 0;
  position: absolute;
  bottom: 20px;
  text-transform: unset;

  &:hover {
    color: ${globalVariables.mainBlueHover};
  }

  @media ${device.mobileL} {
    height: unset;
  }
`;

RegisterButton.displayName = 'RegisterButton';
ForgotButton.displayName = 'ForgotButton';
Input.displayName = 'Input';
