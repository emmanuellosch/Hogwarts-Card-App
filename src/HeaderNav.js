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
        <NavLinkStyled to="/FavoriteCards">Favorite Characters</NavLinkStyled>
        <NavLinkStyled to="/Houses">Houses</NavLinkStyled>
      </nav>
    </header>
  );
}
const NavLinkStyled = styled(NavLink)`
  background-color: rgb(215, 135, 75);
  border-radius: 3px;
  margin-right: 0.8rem;
  padding: 0.4rem 2rem;
  text-decoration: none;

  font-size: 0.8rem;
  color: rgb(215, 135, 75);
  width: 100%;
  height: 2.5rem;
  cursor: crosshair;
  background: transparent;
  border: 0.09rem solid rgb(215, 135, 75);
  outline: none;
  box-shadow: 0px 0px 8px -2px rgb(215, 135, 75);
  transition: 0.25s;
  &:hover {
    box-shadow: 0 0.6em 0.6em -0.4em;
    transform: translateY(-0.25em);
    xcolor: #405e79;
  }
`;
