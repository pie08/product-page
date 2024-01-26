import styled from "styled-components";

const Button = styled.button`
  background-color: var(--color-orange);
  border-radius: 1rem;
  color: var(--color-pale-orange);
  font-weight: 700;
  display: flex;
  padding: 1.6rem 2.4rem;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
  box-shadow: rgb(255, 125, 26, 0.2) 0 2.4rem 4.8rem;
  transition: all 0.2s;

  & img {
    filter: brightness(100);
  }

  &:hover {
    opacity: 75%;
  }
`;

export default Button;
