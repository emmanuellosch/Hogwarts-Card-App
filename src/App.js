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
import FavoriteCards from './pages/FavoriteCards';

function App() {
  const Home = () => <h1>Home</h1>;
  const [hogwartsCards, setHogwartsCards] = useState([]);
  const [favoriteCards, setFavoriteCards] = useState([]);
  console.log(favoriteCards);

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

  function onFavoriteClick(card) {
    /* let neuesArray = [card, ...favoriteCards]; */
    setFavoriteCards((favoriteCards) => [...favoriteCards, card]);
  }

  return (
    <div>
      <HeaderNav />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
            {hogwartsCards.map((card) => (
              <Card
                name={card.name}
                house={card.house}
                bild={card.bild}
                birthday={card.birthday}
                eyes={card.eyes}
                patronus={card.patronus}
                clickHandler={onFavoriteClick}
              />
            ))}
          </Route>
          <Route path="/Houses">
            <Houses cards={hogwartsCards} />
          </Route>
          <Route path="/FavoriteCards">
            <FavoriteCards cards={favoriteCards} />
            {/* {hogwartsCards.map((card) => (
              <Card
                name={card.name}
                house={card.house}
                bild={card.bild}
                birthday={card.birthday}
                eyes={card.eyes}
                patronus={card.patronus}
                clickHandler={onFavoriteClick}
              />
            ))} */}
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
