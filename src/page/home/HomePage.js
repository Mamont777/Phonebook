import { NavLink } from 'components/Navigation/Navigation.styled';
import { HomePageImage, Wrapper } from './HomePage.styled';

export const HomePage = () => {
  return (
    <Wrapper>
      <NavLink to="/contacts">
        <HomePageImage />
      </NavLink>
    </Wrapper>
  );
};
