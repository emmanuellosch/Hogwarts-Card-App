import styled from "styled-components";

export default function Card({ name, house, bild }) {
  return (
    <section>
      <h2>{name}</h2>
      <h3>{house}</h3>
      <img src={bild} />
      <button>More Informations</button>
    </section>
  );
}

//const Card = styled.Card``;
