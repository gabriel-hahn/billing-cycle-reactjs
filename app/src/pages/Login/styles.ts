import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const FormContainer = styled.div`
  background: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const AnimationContainer = styled.div`
  background: #4D7C8A;
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
  color: #4D7C8A;
  font-size: 34px;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  margin: 5px;
  padding: 15px 15px 15px 40px;
  width: 300px;
  border: 1px solid #4D7C8A;
  border-radius: 5px;
  font-size: 14px;

  &::-webkit-input-placeholder {
    color: #4D7C8A;
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
  background: #FFF;
  color: #4D7C8A;
  padding: 12px 115px;
  border: none;
  transition: all 0.5s;

  &:hover {
    color: #416975;
  }
`;

export const LoginButton = styled(sharedButtonStyle)`
  background: #4D7C8A;
  color: #FFF;
  padding: 12px 115px;
  border-radius: 5px;
  transition: all 0.5s;
  display: flex;
  justify-content: center;
  height: 45px;

  &:hover {
    background: #416975;
  }
`;

export const FormInputs = styled.form`
  display: flex;
  flex-direction: column;
`;

export const IconsContainer = styled.div`
  position: absolute;
  margin: 20px;
  color: #4D7C8A;
`;
