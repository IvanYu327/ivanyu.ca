import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const tetrisAnimation = keyframes`
  0% {
    transform: translateY(-60vh);
  }
  100% {
    transform: translateY(0);
  }
`;

const AppWrapper = styled.div`
  position: relative;
`;

const LoadingContent = styled.div<{ fadeOut: boolean }>`
  opacity: 1;
  transition: opacity 0.5s;

  ${({ fadeOut }) =>
    fadeOut &&
    `
    animation: ${fadeOut} 0.5s forwards;
  `}
`;

const WebsiteContent = styled.div<{ fadeIn: boolean }>`
  opacity: 0;
  transition: opacity 0.5s;

  ${({ fadeIn }) =>
    fadeIn &&
    `
    animation: ${fadeIn} 0.5s forwards;
  `}
`;

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <AppWrapper>
      <LoadingContent fadeOut={!loading}>
        {loading && "Loading Animation"}
      </LoadingContent>
      <WebsiteContent fadeIn={!loading}>Actual Website Content</WebsiteContent>
    </AppWrapper>
  );
};

export default App;
