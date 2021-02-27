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
  const [favoriteCards, setFavoriteCards] = useState(loadFromLocal() ?? []);
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
  //Speichern in Local Storage von Favorite Characters
  function loadFromLocal(key = 'FavoriteCharactersList') {
    try {
      const storedItems = localStorage.getItem(key);
      return JSON.parse(storedItems);
    } catch (error) {
      console.error('LocalStorage ist kaputt');
    }
  }
  useEffect(() => {
    localStorage.setItem(
      'FavoriteCharactersList',
      JSON.stringify(favoriteCards)
    );
  }, [favoriteCards]);

  function onFavoriteClick(name, bild) {
    /* let neuesArray = [card, ...favoriteCards]; */
    setFavoriteCards((favoriteCards) => [
      ...favoriteCards,
      { name: name, bild: bild },
    ]);
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
