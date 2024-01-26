import styled from "styled-components";
import useOutsideClick from "../hooks/useOutsideClick";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import Button from "./Button";
import { formatCurrency } from "../utils/formatCurrency";
import IconButton from "./IconButton";

const CartButton = styled(IconButton)`
  & span {
    background-color: var(--color-orange);
    display: block;
    position: absolute;
    top: 0;
    right: -0.2rem;
    line-height: 1;
    color: var(--color-pale-orange);
    font-size: 1.2rem;
    padding: 0.2rem 0.8rem;
    border-radius: 999rem;
  }

  & img {
    width: 100%;
  }
`;

const CartWrapper = styled.div`
  position: relative;
  z-index: 999;

  @media (max-width: 62.5em) {
    position: static;
  }
`;

const CartWindow = styled.div`
  position: absolute;
  top: 11.2rem;
  left: 50%;
  translate: -50% 0;
  background-color: var(--color-white);
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  max-height: 50rem;
  min-width: 40rem;
  overflow-y: auto;

  & > div,
  & > ul {
    padding: 2.4rem;
  }

  & h3 {
    line-height: 1;
  }

  & > span {
    background-color: var(--color-gray-blue);
    height: 1px;
    display: block;
  }

  @media (max-width: 62.5em) {
    width: clamp(30rem, 90vw, 50rem);
    min-width: 0;
  }
`;

const CartList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CartItem = styled.li`
  display: flex;
  align-items: center;
  gap: 2rem;

  & > img {
    max-width: 15%;
    height: 100%;
    border-radius: 0.8rem;
  }

  & > div {
  }

  & button {
    padding: 0.8rem;
    margin-left: auto;

    & img {
      transition: all 0.2s;
    }

    &:hover img {
      filter: brightness(50%);
    }
  }
`;

const CartItemTotalPrice = styled.span`
  font-weight: 700;
  color: var(--color-dark-blue);
  margin-left: 1.6rem;
  letter-spacing: 0.5px;
`;

const CartEmpty = styled.div`
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Cart() {
  const { cart, dispatch } = useCart();
  const cartLength = cart.length;

  // cart window state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const ref = useOutsideClick(() => setIsCartOpen(false));

  function deleteCartItem(id) {
    dispatch({ type: "cart/deleteItem", payload: id });
  }

  return (
    <CartWrapper>
      <CartButton onClick={() => setIsCartOpen((open) => !open)}>
        <img src="/images/icon-cart.svg" alt="Cart" />
        {cartLength > 0 && <span>{cartLength}</span>}
      </CartButton>

      {isCartOpen && (
        <CartWindow ref={ref}>
          <div>
            <h3>Cart</h3>
          </div>

          <span>&nbsp;</span>

          {cartLength > 0 ? (
            <CartList>
              {cart.map(
                ({
                  name,
                  quantity,
                  unitPrice,
                  totalPrice,
                  imageUrl,
                  itemId,
                }) => {
                  return (
                    <CartItem key={itemId}>
                      <img src={imageUrl} alt="" />

                      <div>
                        <p>{name}</p>
                        <div>
                          <span>
                            {formatCurrency(unitPrice)} x {quantity}
                          </span>
                          <CartItemTotalPrice>
                            {formatCurrency(totalPrice)}
                          </CartItemTotalPrice>
                        </div>
                      </div>

                      <button onClick={() => deleteCartItem(itemId)}>
                        <img src="/images/icon-delete.svg" alt="delete" />
                      </button>
                    </CartItem>
                  );
                }
              )}

              <Button>Checkout</Button>
            </CartList>
          ) : (
            <CartEmpty>
              <h3>Your cart is empty.</h3>
            </CartEmpty>
          )}
        </CartWindow>
      )}
    </CartWrapper>
  );
}

export default Cart;
