export default function fetchHarryPotterCards() {
  return fetch(
    "http://hp-api.herokuapp.com/api/characters/students"
  ).then((result) => result.json());
}
