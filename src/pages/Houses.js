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
import GryffindorLogo from '../images/Gryffindor.png';
import RavenclawLogo from '../images/Ravenclaw.png';
import HufflepuffLogo from '../images/Hufflepuff.png';
import SlytherinLogo from '../images/Slytherin.png';

export default function Houses({ cards }) {
  let { url, path } = useRouteMatch();
  return (
    <div>
      <h1>Houses</h1>
      <h3>Please choose a house!</h3>
      <nav>
        <NavLinkStyled to={url + '/Ravenclaw'}>
          <Bild src={RavenclawLogo} alt="" />
        </NavLinkStyled>
        <NavLinkStyled to={url + '/Slytherin'}>
          <Bild src={SlytherinLogo} alt="" />
        </NavLinkStyled>
        <NavLinkStyled to={url + '/Gryffindor'}>
          <Bild src={GryffindorLogo} alt="" />
        </NavLinkStyled>
        <NavLinkStyled to={url + '/Hufflepuff'}>
          <Bild src={HufflepuffLogo} alt="" />
        </NavLinkStyled>
      </nav>
      <Switch>
        <Route exact path={path}></Route>
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
      <WrappContainer>
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
      </WrappContainer>
    </div>
  );
}
const NavLinkStyled = styled(NavLink)`
  margin-right: 0.8rem;
  padding: 4px 12px;
  font-size: 0.8rem;
  text-decoration: none;
`;

const WrappContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const Bild = styled.img`
  max-width: 120px;
`;
