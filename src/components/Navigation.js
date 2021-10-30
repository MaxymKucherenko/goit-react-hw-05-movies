import { NavLink } from 'react-router-dom';
export const Navigation = () => {
  return (
    <nav className="nav">
      <NavLink to="/" exact activeClassName="active" className={'home'}>
        Home
      </NavLink>
      <NavLink to="/movies" activeClassName="active" className=".movies">
        Movies
      </NavLink>
    </nav>
  );
};
