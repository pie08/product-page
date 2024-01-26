import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --color-orange: hsl(26, 100%, 55%);
--color-pale-orange: hsl(25, 100%, 94%);

--color-dark-blue: hsl(220, 13%, 13%);
--color-dark-gray-blue: hsl(219, 9%, 45%);
--color-gray-blue: hsl(220, 14%, 75%);
--color-light-gray-blue: hsl(223, 64%, 98%);
--color-white: hsl(0, 0%, 100%);
--color-black: hsl(0, 0%, 0%);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;

  @media (max-width: 62.5em) {
    font-size: 56.25%;
  }
}

body {
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 1.6rem;
  color: var(--color-dark-gray-blue);
  line-height: 1.5;
  min-height: 100vh;
}

button {
  border: none;
  background: none;
  font: inherit;
  color: inherit;
  cursor: pointer;

  &:has(img) {
    line-height: 0;
  }
}

h1 {
  font-size: 4.8rem;
  line-height: 1.05;
  color: var(--color-dark-blue);

  @media (max-width: 25em) {
    font-size: 3.6rem;
  }
}
`;

export default GlobalStyles;
