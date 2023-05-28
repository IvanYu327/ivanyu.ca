import React, { useEffect, useState } from "react";
import styled, { keyframes, Keyframes } from "styled-components";

const fadeIn: Keyframes = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut: Keyframes = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
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
