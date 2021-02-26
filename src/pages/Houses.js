import styled from 'styled-components';
import React from 'react';
import {
  Switch,
  Route,
  NavLink,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import Card from '../components/Card';
export default function Houses({ cards }) {
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
          <House cards={cards} />
        </Route>
      </switch>
    </div>
  );
}
function House({ cards }) {
  const { houseName } = useParams();
  const filtered = cards.filter((card) => card.house === houseName);
  return (
    <div>
      <h2>This is your house:</h2>
      <h3>{houseName}</h3>
      {filtered.map((card) => (
        <Card
          name={card.name}
          house={card.house}
          bild={card.bild}
          birthday={card.birthday}
          eyes={card.eyes}
          patronus={card.patronus}
        />
      ))}
    </div>
  );
}
/* const NavLinkStyled = styled.NavLink`
  background-color: hotpink;
`;
 */
