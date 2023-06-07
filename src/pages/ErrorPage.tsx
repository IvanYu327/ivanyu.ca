import React from "react";
import { useRouteError } from "react-router-dom";

import styled from "styled-components";

// import { Container } from "../components/globalComponents";

const PageNotFoundMessage = styled.h3`
  margin-top: 30vh;
  margin-bottom: 50vh;
  text-align: center;
`;

const ErrorPage = () => {
  // useRouteError((error, info) => {
  //   // Handle the route error here
  //   console.log("Route error:", error, info);
  // });

  return (
    <div>
      <PageNotFoundMessage>
        Nothing to see here! Are you sure your link is correct?
      </PageNotFoundMessage>
    </div>
  );
};

export default ErrorPage;
