import styled from 'styled-components';
import PropTypes from 'prop-types';
import '../Card.css';

export default function Card({ props, clickHandler }) {
  return (
    <div className="card">
      <div className="front">
        <h2>{props.name}</h2>
        <h3>{props.house}</h3>
        <img src={props.bild} />
      </div>
      <div className="back">
        <h2>{props.name}</h2>
        <p>{props.birthday}</p>
        <p>{props.eyes}</p>
        <p>{props.patronus}</p>
        <button type="button" onClick={() => clickHandler(props)}>
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
