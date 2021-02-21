import styled from "styled-components";
import "./Card.css";

export default function Card({ name, house, bild, birthday, eyes, patronus }) {
  return (
    <div className="card">
      <div className="front">
        <h2>{name}</h2>
        <h3>{house}</h3>
        <img src={bild} />
      </div>
      <div className="back">
        <h2>{name}</h2>
        <p>{birthday}</p>
        <p>{eyes}</p>
        <p>{patronus}</p>
      </div>
    </div>
  );
}
