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
import { useEffect, useState } from 'react';
import fetchHarryPotterCards from '../services/fetchHarryPotterCards';

export default function Houses() {
  /* const [houseCharacters, setHouseCharacters] = useState([]);

  useEffect(() => {
    fetchHarryPotterCards().then((items) => {
      const itemsFetchedFromAPI = items.map((item) => ({
        name: item.name,
        house: item.house,
        bild: item.image,
        birthday: item.dateOfBirth,
        eyes: item.eyeColour,
        patronus: item.patronus,
      }));
      setHouseCharacters(itemsFetchedFromAPI);
    });
  }, []);
 */
  let { url, path } = useRouteMatch();
  //console.log(houseCharacters);
  //const FilterTest = HouseFilter(houseCharacters);
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
          {/* {houseCharacters.map((card) => (
            <Card
              name={card.name}
              house={card.house}
              bild={card.bild}
              birthday={card.birthday}
              eyes={card.eyes}
              patronus={card.patronus}
            />
          ))} */}
        </Route>
      </switch>
    </div>
  );
  function House() {
    const { houseName } = useParams();
    return (
      <div>
        <h2>This is your house:</h2>
        <h3>{houseName}</h3>
      </div>
    );
  }
  /* function HouseFilter({ houseCharacters }) {
    const { houseName } = useParams();

    return houseCharacters.filter((card) => card.house == { houseName });
  } */
}

/* const NavLinkStyled = styled.NavLink`
  background-color: hotpink;
`;
 */
