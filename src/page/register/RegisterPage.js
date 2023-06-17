import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { RegisterBox, Title } from './RegisterPage.styled';

export const RegisterPage = () => {
  return (
    <>
      <Title>Create your account</Title>
      <RegisterBox>
        <RegisterForm />
      </RegisterBox>
    </>
  );
};
