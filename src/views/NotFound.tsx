import React from "react";
import styled from "styled-components";

import { Caption } from "../styles";

const NotFound: React.FC = () => {
  return (
    <Container>
      <Caption>404. Looks like there isn&apos;t anything here</Caption>
    </Container>
  );
};

export default NotFound;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
`;
