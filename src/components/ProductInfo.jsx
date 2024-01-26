import { useState } from "react";
import styled from "styled-components";
import { useCart } from "../context/CartContext";
import Button from "./Button";

// Product Info
const StyledProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  max-width: 70rem;
  justify-self: center;

  @media (max-width: 62.5em) {
    padding: 0 2.4rem;
  }
`;

const ProductDescription = styled.div`
  & h1 {
    margin-bottom: 2.4rem;
  }
`;

const CompanyName = styled.p`
  text-transform: uppercase;
  color: var(--color-orange);
  letter-spacing: 2px;
  margin-bottom: 2rem;
`;

// Price
const PriceBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  & p {
    margin-left: auto;
    display: none;

    @media (max-width: 62.5em) {
      display: block;
    }
  }
`;

const Price = styled.span`
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-dark-blue);
`;

const Discount = styled.span`
  background-color: var(--color-pale-orange);
  color: var(--color-orange);
  line-height: 1;
  font-weight: 700;
  padding: 0.6rem 0.8rem;
  border-radius: 0.5rem;
`;

const DiscountedPrice = styled.p`
  font-weight: 700;
  color: var(--color-gray-blue);
  text-decoration: line-through;

  @media (max-width: 62.5em) {
    display: none;
  }
`;

// Actions
const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2.4rem;

  @media (max-width: 62.5em) {
    grid-template-columns: 1fr;
  }
`;

const AmountSelector = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--color-light-gray-blue);
  padding: 1.6rem 2.4rem;
  border-radius: 1rem;

  & p {
    font-weight: 700;
    color: var(--color-dark-blue);
  }

  & img {
    transition: all 0.2s;
  }

  & button:hover img {
    opacity: 75%;
  }
`;

function ProductInfo() {
  const { dispatch } = useCart();
  const [quantity, setQuantity] = useState(1);

  function decreaseQuantity() {
    setQuantity((q) => {
      if (q <= 1) return q;
      return q - 1;
    });
  }

  function increaseQuantity() {
    setQuantity((q) => q + 1);
  }

  function addItemToCart() {
    if (quantity < 1) return;

    dispatch({
      type: "cart/addItem",
      payload: {
        itemId: 1,
        name: "Fall Limited Edition Sneakers",
        quantity,
        unitPrice: 125,
        totalPrice: 125 * quantity,
        imageUrl: "/images/image-product-1-thumbnail.jpg",
      },
    });

    setQuantity(1);
  }

  return (
    <StyledProductInfo>
      <ProductDescription>
        <CompanyName>Sneaker Company</CompanyName>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </ProductDescription>

      <div>
        <PriceBox>
          <Price>$125.00</Price>
          <Discount>50%</Discount>
          <DiscountedPrice>$250.00</DiscountedPrice>
        </PriceBox>
        <DiscountedPrice>$250.00</DiscountedPrice>
      </div>

      <Actions>
        <AmountSelector>
          <button onClick={() => decreaseQuantity()}>
            <img src="/images/icon-minus.svg" alt="decrease" />
          </button>
          <p>{quantity}</p>
          <button onClick={() => increaseQuantity()}>
            <img src="/images/icon-plus.svg" alt="increase" />
          </button>
        </AmountSelector>
        <Button onClick={addItemToCart}>
          <img src="/images/icon-cart.svg" alt="" />
          Add to cart
        </Button>
      </Actions>
    </StyledProductInfo>
  );
}

export default ProductInfo;
