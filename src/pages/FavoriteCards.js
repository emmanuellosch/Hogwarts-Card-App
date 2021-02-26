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

export default function FavoriteCards({ cards }) {
  return (
    <div>
      <h1>Favorite Characters</h1>
      {cards.map((card) => (
        <div>
          <div>{card.name}</div>
          <img src={card.bild} />
        </div>
      ))}
    </div>
  );
}
