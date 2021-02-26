import './App.css';
import Card from './components/Card';
import fetchHarryPotterCards from './services/fetchHarryPotterCards';

import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import HeaderNav from './HeaderNav';
import Houses from './pages/Houses';
import { Route, Switch } from 'react-router-dom';

function App() {
  const Home = () => <h1>Home</h1>;
  const [hogwartsCards, setHogwartsCards] = useState([]);

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
      setHogwartsCards(itemsFetchedFromAPI);
    });
  }, []);

  return (
    <div>
      <HeaderNav />
      <main>
        <switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Houses">
            <Houses cards={hogwartsCards} />
          </Route>
        </switch>
      </main>

      {hogwartsCards.map((card) => (
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

export default App;
