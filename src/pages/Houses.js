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
        <NavLink to={url + '/Ravenclaw'}>Ravenclaw</NavLink>
        <NavLink to={url + '/Slytherin'}>Slytherin</NavLink>
        <NavLink to={url + '/Gryiffindor'}>Gryffindor</NavLink>
        <NavLink to={url + '/Hufflepuff'}>Hufflepuff</NavLink>
      </nav>

      <switch>
        <Route exact path={path}>
          <h3>Please choose a house!</h3>
        </Route>
        <Route path={url + '/:houseName'}>
          <House />

          {HouseFilter.map((card) => (
            <Card
              name={card.name}
              house={card.house}
              bild={card.bild}
              birthday={card.birthday}
              eyes={card.eyes}
              patronus={card.patronus}
            />
          ))}
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
function HouseFilter() {
  const { houseName } = useParams();
  return hogwartsCards.filter((card) => card.house == { houseName });
}

/* const NavLinkStyled = styled.NavLink`
  background-color: hotpink;
`;
 */
