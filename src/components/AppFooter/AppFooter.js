import { Footer, Text, HeartIcon, Link, Name } from './AppFooter.styled.jsx';

const AppFooter = () => {
  return (
    <Footer>
      <Text>
        &copy; {new Date().getFullYear()} Developed with{' '}
        <HeartIcon role="img" aria-label="heart">
          ❤
        </HeartIcon>
        by
        <Link
          href="https://github.com/Mamont777"
          target="_blank"
          rel="noopener noreferrer"
          title="Github profile"
          aria-label="Link to Github profile"
        >
          <Name>Sergii</Name>
        </Link>
      </Text>
    </Footer>
  );
};

export default AppFooter;
