import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import ProductImages from "./components/ProductImages";
import Header from "./components/Header";
import ProductInfo from "./components/ProductInfo";

const Container = styled.div`
  max-width: 120rem;
  padding: 0 2.4rem;
  margin: 0 auto;

  @media (max-width: 62.5em) {
    /* padding: 1.2rem; */
  }
`;

const ProductContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12.8rem;
  align-items: center;
  margin-bottom: 6.4rem;

  @media (max-width: 62.5em) {
    gap: 3.6rem;
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />

      <Header />

      <ProductContainer>
        <ProductImages />
        <ProductInfo />
      </ProductContainer>
    </>
  );
}

export default App;
