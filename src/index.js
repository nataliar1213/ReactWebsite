import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import HorizontalScroll from "./horizontal-scroll";

const Main = styled.main``;

const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

const CardsContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 0 0 0 150px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const SampleCard = styled.div`
  position: relative;
  height: 300px;
  width: 500px;
  background-color: #111f30;
  margin-right: 75px;
  flex-shrink: 0;
`;

const SampleCards = React.memo(() =>
  Array(5)
    .fill(0)
    .map((_e, i) => <SampleCard key={`sampleCard-${i}`} />)
);

const App = () => (
  <Main>
    <HorizontalSection>
      <HorizontalScroll>
        <CardsContainer>
          <SampleCards />
        </CardsContainer>
      </HorizontalScroll>
    </HorizontalSection>
  </Main>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
