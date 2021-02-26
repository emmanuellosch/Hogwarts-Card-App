import { NavLink, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

export default function HeaderNavigation() {
  const { url, path } = useRouteMatch();
  return (
    <header className="header">
      <nav className="Navigation">
        <NavLinkStyled exact to="/">
          Home
        </NavLinkStyled>
        <NavLinkStyled to="/Houses">Houses</NavLinkStyled>
        <NavLinkStyled to="/FavoriteCards">Favorite Characters</NavLinkStyled>
      </nav>
    </header>
  );
}
const NavLinkStyled = styled(NavLink)`
  background-color: purple;
  color: white;
  margin-right: 0.8rem;
  padding: 4px 12px;
  text-decoration: none;
`;
