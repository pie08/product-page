import styled from "styled-components";
import Lightbox from "./Lightbox";
import LightboxProductImageContainer from "./LightboxProductImageContainer";
import { useState } from "react";
import RenderBreakpoint from "./RenderBreakpoint";

const StyledProductImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 3.2rem;
  position: relative;

  & img {
    width: 100%;
    border-radius: 2rem;
    transition: all 0.2s;

    &:nth-child(1) {
      grid-column: 1 / -1;

      &:hover {
        cursor: pointer;
      }
    }

    @media (max-width: 36.56em) {
      border-radius: 0;
    }
  }

  & button {
    border-radius: 2rem;
    overflow: hidden;
    background-color: #fff;

    & img:hover {
      opacity: 65%;
      cursor: pointer;
    }

    &.active {
      & img {
        opacity: 65%;
      }
      outline: 3px solid var(--color-orange);
    }

    @media (max-width: 62.5em) {
      display: none;
    }
  }

  @media (max-width: 62.5em) {
    max-width: 65rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
`;

const ChangeImageButton = styled.button`
  &&& {
    display: none;
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
    background-color: var(--color-white);
    align-items: center;
    justify-content: center;

    & img {
      width: 1.4rem;
    }

    @media (max-width: 62.5em) {
      display: flex;
    }
  }
`;

const PrevImageButton = styled(ChangeImageButton)`
  position: absolute;
  top: 50%;
  left: 0;
  translate: 50% -50%;
`;

const NextImageButton = styled(ChangeImageButton)`
  position: absolute;
  top: 50%;
  right: 0;
  translate: -50% -50%;
`;

function ProductImageContainer() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const productImages = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
  ];
  const currentImage = productImages[currentImageIndex];

  function incrementImageIndex() {
    setCurrentImageIndex((i) => (i >= productImages.length - 1 ? i : i + 1));
  }

  function decrementImageIndex() {
    setCurrentImageIndex((i) => (i <= 0 ? 0 : i - 1));
  }

  return (
    <StyledProductImageContainer>
      <RenderBreakpoint
        element1={
          <>
            <Lightbox.Open id="sneakers">
              <img src={currentImage} alt="" />
            </Lightbox.Open>

            <Lightbox.Window id="sneakers">
              <LightboxProductImageContainer />
            </Lightbox.Window>
          </>
        }
        element2={<img src={currentImage} alt="" />}
        breakpointWidth={1000}
      />
      <PrevImageButton onClick={decrementImageIndex}>
        <img src="/images/icon-previous.svg" alt="" />
      </PrevImageButton>
      <NextImageButton onClick={incrementImageIndex}>
        <img src="/images/icon-next.svg" alt="" />
      </NextImageButton>

      <button
        onClick={() => setCurrentImageIndex(0)}
        className={`${currentImageIndex === 0 && "active"}`}
      >
        <img src="/images/image-product-1-thumbnail.jpg" alt="" />
      </button>
      <button
        onClick={() => setCurrentImageIndex(1)}
        className={`${currentImageIndex === 1 && "active"}`}
      >
        <img src="/images/image-product-2-thumbnail.jpg" alt="" />
      </button>
      <button
        onClick={() => setCurrentImageIndex(2)}
        className={`${currentImageIndex === 2 && "active"}`}
      >
        <img src="/images/image-product-3-thumbnail.jpg" alt="" />
      </button>
      <button
        onClick={() => setCurrentImageIndex(3)}
        className={`${currentImageIndex === 3 && "active"}`}
      >
        <img src="/images/image-product-4-thumbnail.jpg" alt="" />
      </button>
    </StyledProductImageContainer>
  );
}

export default ProductImageContainer;
