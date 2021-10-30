import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies, title }) => {
  const location = useLocation();

  return (
    <>
      {title && <h1>{title}</h1>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: {
                  from: {
                    location,
                    label: 'Return to previous page',
                  },
                },
              }}
            >
              {movie.title ||
                movie.original_title ||
                movie.name ||
                'No name movie'}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
