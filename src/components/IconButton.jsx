import styled from "styled-components";

const IconButton = styled.button`
  padding: 0.8rem;
  position: relative;

  & img {
    transition: all 0.2s;
  }

  &:hover img {
    filter: brightness(50%);
  }
`;

export default IconButton;
