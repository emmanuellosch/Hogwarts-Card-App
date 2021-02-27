import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  background-color: rgba(112, 27, 33);
  color: rgb(215, 135, 75);
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  text-align: center;
}
`;
