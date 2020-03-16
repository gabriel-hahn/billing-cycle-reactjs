import styled, { css } from 'styled-components';

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
`;

export const Title = styled.h3`
  color: #4D7C8A;
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  margin: 5px;
  padding: 15px;
  width: 300px;
  background: rgba(77, 124, 138, 0.5);
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
`;

export const LoginButton = styled(sharedButtonStyle)`
  background: #4D7C8A;
  color: #FFF;
  padding: 12px 120px;
  border-radius: 5px;
`;

export const FormInputs = styled.form`
  display: flex;
  flex-direction: column;
`;
