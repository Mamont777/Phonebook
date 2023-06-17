import { Link } from 'react-router-dom';

export const notFoundPage = () => {
  return (
    <>
      <h2>Sorry, something went wrong (:</h2>
      <Link to="/">Home</Link>
    </>
  );
};
