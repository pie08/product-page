import styled, { css } from "styled-components";
import Cart from "./Cart";
import IconButton from "./IconButton";
import { useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

const hidden = css`
  pointer-events: none;
  visibility: hidden;
  opacity: 0;
`;

const visible = css`
  pointer-events: all;
  visibility: visible;
  opacity: 100%;
`;

const HeaderContainer = styled.div`
  max-width: 125rem;
  margin: 0 auto;
  padding: 0 2.4rem;

  @media (max-width: 62.5em) {
    padding: 0;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  gap: 4.8rem;
  align-items: center;
  border-bottom: 1px solid var(--color-gray-blue);

  padding: 0 2.4rem;
  margin-bottom: 6.4rem;
  min-height: 12.8rem;

  @media (max-width: 62.5em) {
    min-height: 9.6rem;
    gap: 2.4rem;
    margin-bottom: 0;
    border: none;
  }

  @media (max-width: 36.58em) {
    gap: 1.2rem;
  }
`;

const Logo = styled.img`
  translate: 0 -0.2rem;
`;

const Nav = styled.nav`
  align-self: stretch;

  & ul {
    height: 100%;
    display: flex;
    gap: 3.2rem;
    list-style: none;

    & li {
      height: 100%;
      display: flex;
      align-items: center;
      position: relative;

      &::after {
        content: "";
        height: 3px;
        width: 0;
        display: block;
        background-color: var(--color-orange);
        position: absolute;
        bottom: 0;
        left: 0;
        transition: all 0.2s;
        transition-timing-function: ease-out;
      }

      &:has(a:hover)::after {
        width: 100%;
      }
    }

    & li a:link,
    & li a:visited {
      color: inherit;
      text-decoration: none;
      padding: 1.2rem 0;
    }

    & li a:hover,
    & li a:active {
      transition: all 0.2s;
      color: var(--color-black);
    }
  }

  /* mobile styles */
  @media (max-width: 62.5em) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 70vw;
    background-color: var(--color-white);
    padding: 3.2rem;
    overflow-y: auto;
    z-index: 999;
    translate: -100% 0;
    transition: all 0.2s;

    ${(props) =>
      props.$isOpen &&
      css`
        translate: 0 0;
      `}

    & button {
      margin-bottom: 4.8rem;
      padding: 0;
      width: 2rem;
      height: 2rem;

      & img {
        width: 100%;
      }
    }

    & ul {
      flex-direction: column;
      gap: 2.4rem;

      & li {
        height: auto;
        display: block;
      }

      & li a:link,
      & li a:visited {
        font-size: 2.4rem;
        font-weight: 700;
        color: var(--color-black);
      }
    }
  }
`;

const NavRight = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 3.2rem;

  & > img {
    width: 5.6rem;
    border-radius: 50%;
    transition: all 0.2s;
    outline: 2px solid transparent;

    &:hover {
      outline: 2px solid var(--color-orange);
      cursor: pointer;
    }

    @media (max-width: 62.5em) {
      width: 4rem;
    }
  }

  @media (max-width: 36.58em) {
    gap: 2.4rem;
  }
`;

const MobileMenuButton = styled(IconButton)`
  display: none;

  @media (max-width: 62.5em) {
    display: block;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  opacity: 0;
  transition: all 0.2s;
  ${hidden}

  ${(props) =>
    props.$isOpen &&
    css`
      ${visible}
      opacity: 50%;
    `}
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  return (
    <HeaderContainer>
      <StyledHeader>
        <MobileMenuButton onClick={() => setIsOpen(true)}>
          <img src="/images/icon-menu.svg" alt="" />
        </MobileMenuButton>

        <Logo src="/images/logo.svg" alt="Sneakers logo" />

        <Overlay $isOpen={isOpen} />
        <Nav $isOpen={isOpen} ref={ref}>
          <MobileMenuButton onClick={() => setIsOpen(false)}>
            <img src="/images/icon-close.svg" alt="" />
          </MobileMenuButton>

          <ul>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </Nav>

        <NavRight>
          <Cart />

          <img src="/images/image-avatar.png" alt="Profile" />
        </NavRight>
      </StyledHeader>
    </HeaderContainer>
  );
}

export default Header;
