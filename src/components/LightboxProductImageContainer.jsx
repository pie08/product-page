import styled from "styled-components";
import { useState } from "react";

const StyledLightboxProductImageContainer = styled.div`
  width: 60rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  & img {
    width: 100%;
    border-radius: 2rem;
    transition: all 0.2s;

    &:nth-child(1) {
      grid-column: 1 / -1;
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
  }
`;

const ProductImageBox = styled.div`
  position: relative;
`;

const ProductThumbnails = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 80%;
  align-self: center;
`;

const ChangeImageButton = styled.button`
  &&& {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
    background-color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      width: 1.4rem;
    }
  }
`;

const PrevImageButton = styled(ChangeImageButton)`
  position: absolute;
  top: 50%;
  left: 0;
  translate: -50% -50%;
`;

const NextImageButton = styled(ChangeImageButton)`
  position: absolute;
  top: 50%;
  right: 0;
  translate: 50% -50%;
`;

function LightboxProductImageContainer() {
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
    setCurrentImageIndex((i) => (i <= 0 ? i : i - 1));
  }

  return (
    <StyledLightboxProductImageContainer>
      <ProductImageBox>
        <PrevImageButton onClick={decrementImageIndex}>
          <img src="/images/icon-previous.svg" alt="" />
        </PrevImageButton>
        <img src={currentImage} alt="" />
        <NextImageButton onClick={incrementImageIndex}>
          <img src="/images/icon-next.svg" alt="" />
        </NextImageButton>
      </ProductImageBox>

      <ProductThumbnails>
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
      </ProductThumbnails>
    </StyledLightboxProductImageContainer>
  );
}

export default LightboxProductImageContainer;
