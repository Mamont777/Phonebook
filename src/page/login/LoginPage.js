import { LoginForm } from 'components/LoginForm/LoginForm';
import { LoginBox, LoginTitle } from './LoginPage.styled';

export const LoginPage = () => {
  return (
    <>
      <LoginTitle>Login</LoginTitle>
      <LoginBox>
        <LoginForm />
      </LoginBox>
    </>
  );
};
