import "./App.css";
import Card from "./components/Card";
import fetchHarryPotterCards from "./services/fetchHarryPotterCards";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import PropTypes from "prop-types";

function App() {
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
