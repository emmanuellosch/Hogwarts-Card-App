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
        <NavLinkStyled to={url + '/Ravenclaw'}>Ravenclaw</NavLinkStyled>
        <NavLinkStyled to={url + '/Slytherin'}>Slytherin</NavLinkStyled>
        <NavLinkStyled to={url + '/Gryffindor'}></NavLinkStyled>
        <NavLinkStyled to={url + '/Hufflepuff'}>Hufflepuff</NavLinkStyled>
      </nav>
      <Switch>
        <Route exact path={path}>
          <h3>Please choose a house!</h3>
        </Route>
        <Route path={url + '/:houseName'}>
          <House cards={cards} />
        </Route>
      </Switch>
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
const NavLinkStyled = styled(NavLink)`
  background-color: hotpink;
  margin-right: 0.8rem;
  padding: 4px 12px;
  font-size: 0.8rem;
  text-decoration: none;
`;
