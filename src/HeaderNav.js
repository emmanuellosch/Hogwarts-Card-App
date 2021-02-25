import { NavLink, useRouteMatch } from 'react-router-dom';

export default function HeaderNavigation() {
  const { url, path } = useRouteMatch();
  return (
    <header className="header">
      <nav className="Navigation">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/Houses">Houses</NavLink>
      </nav>
    </header>
  );
}
