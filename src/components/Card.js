import styled from 'styled-components';
import PropTypes from 'prop-types';
import '../Card.css';

export default function Card({
  name,
  house,
  bild,
  birthday,
  eyes,
  patronus,
  clickHandler,
}) {
  return (
    <div className="card">
      <div className="front">
        <h2>{name}</h2>
        <img src={bild} />
        <h4>{house}</h4>
      </div>
      <div className="back">
        <h2>{name}</h2>
        <p>{birthday}</p>
        <p>{eyes}</p>
        <p>{patronus}</p>
        <button type="button" onClick={() => clickHandler(name, bild)}>
          Like
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.arrayOf(PropTypes.string),
  house: PropTypes.arrayOf(PropTypes.string),
  birthday: PropTypes.arrayOf(PropTypes.string),
};
