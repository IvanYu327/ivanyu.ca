import React from "react";

import styled from "styled-components";

const PageNotFoundMessage = styled.h3`
  text-align: center;
`;

const ErrorPage: React.FC = () => {
  return (
    <div>
      <PageNotFoundMessage>
        Nothing to see here! Are you sure your link is correct?
      </PageNotFoundMessage>
    </div>
  );
};

export default ErrorPage;
