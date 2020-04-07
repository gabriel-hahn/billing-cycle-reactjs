import React, { useState, useEffect, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import Lottie, { Options } from 'react-lottie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faFont } from '@fortawesome/free-solid-svg-icons';
import { RotateSpinner } from 'react-spinners-kit';
import api from '../../services/api';

import pigAnimation from '../../config/piggy-bank.json';
import { Creators as UsersTypes } from '../../store/ducks/users';

import {
  Container,
  FormContainer,
  FormInputs,
  AnimationContainer,
  Animation,
  Title,
  Input,
  LoginButton,
  RegisterButton,
  IconsContainer,
  ForgotButton,
  ResetTitle,
} from './styles';
import { UserInterface } from '../../interfaces/user';
import { StoreInterface } from '../../interfaces/store';

const defaultOptions: Options = {
  loop: true,
  autoplay: true,
  animationData: pigAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isForgotPassword, setIsForgotPassword] = useState<boolean>(false);
  const [isForgotRequest, setIsForgotRequest] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { data: userState, loading } = useSelector((state: StoreInterface) => state.users);

  useEffect(() => {
    if (userState && userState.token) {
      history.push('/dashboard/overview');
    }
  }, [userState]);

  const handleFormSubit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (isForgotPassword) {
      setIsForgotRequest(true);

      api.post('/reset', { email });
    } else {
      const user: UserInterface = { email, password, name };

      dispatch(isLogin
        ? UsersTypes.loginRequest(user)
        : UsersTypes.registerRequest(user));
    }
  };

  const handleNameChange = (e: FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const handleEmailChange = (e: FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value.trim());
  };

  const handlePasswordChange = (e: FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value.trim());
  };

  const handleLoginChange = () => {
    setIsLogin(!isLogin);
    setIsForgotPassword(false);
  };

  const handleForgotPassword = () => {
    setIsForgotPassword(!isForgotPassword);
    setIsLogin(isForgotPassword);
  };

  return (
    <Container>
      <AnimationContainer>
        <Animation>
          <Lottie
            options={defaultOptions}
          />
        </Animation>
      </AnimationContainer>
      <FormContainer onSubmit={handleFormSubit}>
        <Title>{isLogin || !isForgotPassword ? 'Welcome' : 'Password reset' }</Title>
        { isForgotRequest && !loading && (
          <ResetTitle>Please, check your e-mail and set the new password.</ResetTitle>
        ) }
        <FormInputs>
          {!isLogin && !isForgotPassword && !isForgotRequest && (
            <div>
              <IconsContainer>
                <FontAwesomeIcon className="font-icon" icon={faFont} />
              </IconsContainer>
              <Input value={name} onChange={handleNameChange} placeholder="Name" name="name" />
            </div>
            )}
          { !isForgotRequest && (
            <div>
              <IconsContainer>
                <FontAwesomeIcon className="font-icon" icon={faUser} />
              </IconsContainer>
              <Input value={email} onChange={handleEmailChange} placeholder="E-mail" name="email" />
            </div>
          )}
          { !isForgotPassword && !isForgotRequest && (
            <div>
              <IconsContainer>
                <FontAwesomeIcon className="font-icon" icon={faLock} />
              </IconsContainer>
              <Input value={password} onChange={handlePasswordChange} placeholder="Password" name="password" type="password" />
            </div>
          )}
          { !isForgotRequest && (
            <LoginButton>
              { loading ? <RotateSpinner size={22} color="#FFF" /> : (isLogin ? 'Login' : (isForgotPassword ? 'Reset' : 'Register')) }
            </LoginButton>
          ) }
        </FormInputs>
        { !isForgotRequest && (
          <>
            <RegisterButton onClick={handleLoginChange}>{ isLogin ? 'Register' : 'Login' }</RegisterButton>
            <ForgotButton onClick={handleForgotPassword}>Forgot password?</ForgotButton>
          </>
        )}
      </FormContainer>
    </Container>
  );
};

export default Login;
