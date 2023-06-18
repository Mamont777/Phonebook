import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { Button, UserIcon, Username, Wrapper } from './UserMenu.styled';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserIcon />
      <Username>{user.name}</Username>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Wrapper>
  );
};
