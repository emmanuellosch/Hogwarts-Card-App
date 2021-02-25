import styled from 'styled-components';
import React from 'react';
import {
  Switch,
  Route,
  NavLink,
  useParams,
  useRouteMatch,
} from 'react-router-dom';

export default function Houses() {
  let { url, path } = useRouteMatch();
  return (
    <div>
      <h1>Houses</h1>
      <nav>
        <NavLink to={url + '/ravenclaw'}>Ravenclaw</NavLink>
        <NavLink to={url + '/slytherin'}>Slytherin</NavLink>
        <NavLink to={url + '/gryiffindor'}>Gryffindor</NavLink>
        <NavLink to={url + '/hufflepuff'}>Hufflepuff</NavLink>
      </nav>

      <switch>
        <Route exact path={path}>
          <h3>Please choose a house!</h3>
        </Route>
        <Route path={url + '/:houseName'}>
          <House />
        </Route>
      </switch>
    </div>
  );
}
function House() {
  const { houseName } = useParams();
  return (
    <div>
      <h2>This is your house:</h2>
      <h3>{houseName}</h3>
    </div>
  );
}

/* const NavLinkStyled = styled.NavLink`
  background-color: hotpink;
`;
 */
