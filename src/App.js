import { Switch, Route } from 'react-router';
import { lazy, Suspense } from 'react';
import { AppBar } from './components/AppBar';

const MoviesPage = lazy(() =>
  import(
    './components/MoviesPage' /* webpackChunkName: "movies-page" */
  )
);
const HomePage = lazy(() =>
  import('./components/HomePage' /* webpackChunkName: "home-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    './components/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  )
);
const NotFound = lazy(() =>
  import('./components/NotFound' /* webpackChunkName: "not-found" */)
);

export default function App() {
  return (
    <div className="App-header">
      <AppBar />
      <Suspense fallback={<h1>LOADING</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}
