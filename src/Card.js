import styled from "styled-components";

export default function Card({ name, house, bild, birthday, eyes, patronus }) {
  return (
    <CardContainer className="card">
      <div className="front">
        <h2>{name}</h2>
        <h3>{house}</h3>
        <HogwartsBild src={bild} />
      </div>
      <div className="back">
        <h2>{name}</h2>
        <p>{birthday}</p>
        <p>{eyes}</p>
        <p>{patronus}</p>
      </div>
    </CardContainer>
  );
}

const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgrey;
  border: 0.1rem grey solid;
  margin: 1.5rem;
  padding: 2rem;
  font-family: verdana;
  font-size: 20px;

  perspective: 30rem;

  .front,
  .back {
    transition: transform 1s;
    backface-visibility: hidden;
  }

  .back {
    transform: rotateY(180deg);
  }
  .card:hover .front {
    transform: rotateY(180deg);
  }
  .card:hover .back {
    transform: rotateY(360deg);
  }
`;

const HogwartsBild = styled.img`
  max-width: 10rem;
`;
