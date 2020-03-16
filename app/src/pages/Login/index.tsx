import React, { useState, useEffect, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { Creators as UsersTypes } from '../../store/ducks/users';

import {
  Container,
  FormContainer,
  FormInputs,
  AnimationContainer,
  Title,
  Input,
  LoginButton,
  RegisterButton,
} from './styles';
import { UserInterface } from '../../interfaces/user';
import { StoreInterface } from '../../interfaces/store';

const Login = (props: RouteComponentProps) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const { history } = props;

  const dispatch = useDispatch();
  const userState = useSelector((state: StoreInterface) => state.users.data);

  useEffect(() => {
    if (userState && userState.token) {
      history.push('/dashboard/overview');
    }
  }, [userState]);

  const handleFormSubit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    const user: UserInterface = {
      email,
      password,
      name,
    };

    dispatch(isLogin ? UsersTypes.loginRequest(user) : UsersTypes.registerRequest(user));
  };

  return (
    <Container>
      <AnimationContainer>
        Animation
      </AnimationContainer>
      <FormContainer onSubmit={handleFormSubit}>
        <Title>Know where your money is</Title>
        <FormInputs>
          {!isLogin && <Input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />}
          <Input value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail" />
          <Input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
          <LoginButton>{ isLogin ? 'Login' : 'Register' }</LoginButton>
        </FormInputs>
        <RegisterButton onClick={() => setIsLogin(!isLogin)}>{ isLogin ? 'Register' : 'Login' }</RegisterButton>
      </FormContainer>
    </Container>
  );
};

export default Login;
