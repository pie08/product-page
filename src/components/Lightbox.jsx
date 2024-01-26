import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const StyledLightbox = styled.div`
  z-index: 999;
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  max-height: 85vh;
`;

const LightBoxClose = styled.button`
  position: absolute;
  top: -3.6rem;
  right: 0;

  & img {
    filter: brightness(100);
    width: 2rem;
  }
`;

const lightboxContext = createContext();

function Lightbox({ children }) {
  const [openId, setOpenId] = useState("");

  function open(id) {
    setOpenId(id);
  }

  function close() {
    setOpenId("");
  }

  return (
    <lightboxContext.Provider
      value={{
        openId,
        open,
        close,
      }}
    >
      {children}
    </lightboxContext.Provider>
  );
}

function Open({ id, children }) {
  const { open } = useContext(lightboxContext);

  return cloneElement(children, {
    onClick: () => open(id),
  });
}

function Window({ children, id }) {
  const { close, openId } = useContext(lightboxContext);

  if (openId !== id) return null;

  return createPortal(
    <>
      <Overlay onClick={() => close(id)} />
      <StyledLightbox>
        <LightBoxClose onClick={() => close(id)}>
          <img src="/images/icon-close.svg" alt="" />
        </LightBoxClose>
        {children}
      </StyledLightbox>
    </>,
    document.body
  );
}

Lightbox.Open = Open;
Lightbox.Window = Window;

export default Lightbox;
