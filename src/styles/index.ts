import { Link } from "react-router-dom";
import styled from "styled-components";
import { DefaultTheme } from "styled-components";

import { mediaQueries } from "../utils/responsive";

export const theme: DefaultTheme = {
  colors: {
    background: {
      dark: "#141425",
      light: "#29264F"
    },
    text: {
      dark: {
        white: "#FFFFFFDE",
        gray: "#FFFFFF99",
        black: "#FFFFFF61"
      },
      light: {
        black: "#0D0D0B",
        gray: "#6D6D6D",
        white: "#BDBDBD"
      }
    },
    primary: {
      cyan: "#19FBFF",
      blue: "#1FA6FF",
      purple: "#896BFF",
      pink: "#FF2CFB",
      yellow: "#F7CE58",
      orange: "#F09343"
    },
    secondary: {
      cyan: "#009B9E",
      blue: "#1574B3",
      purple: "#8149F2",
      pink: "#BF21BD",
      yellow: "#B1923B",
      orange: "#C47937"
    },
    state: {
      error: "#FE8888",
      success: "#88FE8D",
      infomative: "#88E2FE",
      warning: "#FCFE88"
    }
  }
};

export const Heading1 = styled.h1`
  margin: 0px;
  font-family: "Inter";
  font-size: 48px;
  font-weight: 400;

  // ${mediaQueries.tablet} {
  //   font-size: 36px;
  // }

  // ${mediaQueries.largeMobile} {
  //   font-size: 24px;
  // }
`;

export const Heading2 = styled.h2`
  margin: 0px;
  font-family: "Inter";
  font-size: 36px;
  font-weight: 400;

  // ${mediaQueries.tablet} {
  //   font-size: 24px;
  // }
`;

export const Heading3 = styled.h3`
  margin: 0px;
  font-family: "Inter";
  font-size: 24px;
  font-weight: 400;

  // ${mediaQueries.tablet} {
  //   font-size: 20px;
  // }
`;

export const Heading4 = styled.h4`
  margin: 0px;
  font-family: "Inter";
  font-size: 20px;
  font-weight: 400;

  // ${mediaQueries.tablet} {
  //   font-size: 20px;
  // }
`;

export const LargeBody = styled.p`
  margin: 0px;
  font-family: "Inter";
  font-size: 20px;
  font-weight: 400;

  // ${mediaQueries.tablet} {
  //   font-size: 16px;
  // }
`;

export const LargeBodyMedium = styled.p`
  margin: 0px;
  font-family: "Inter";
  font-size: 20px;
  font-weight: 600;

  // ${mediaQueries.tablet} {
  //   font-size: 16px;
  // }
`;

export const LargeBodyBold = styled.p`
  margin: 0px;
  font-family: "Inter";
  font-size: 20px;
  font-weight: 700;

  // ${mediaQueries.tablet} {
  //   font-size: 16px;
  // }
`;

export const Body = styled.p`
  padding: 0px;
  margin: 0px;
  font-family: "Inter";
  font-size: 16px;
  font-weight: 400;
`;

export const BodyMedium = styled.p`
  padding: 0px;
  margin: 0px;
  font-family: "Inter";
  font-size: 16px;
  font-weight: 600;
`;

export const BodyBold = styled.p`
  padding: 0px;
  margin: 0px;
  font-family: "Inter";
  font-size: 16px;
  font-weight: 700;
`;

export const Caption = styled.p`
  padding: 0px;
  margin: 0px;
  font-family: "Inter";
  font-size: 12px;
  font-weight: 400;
  font-style: italic;
`;

export const StyledLink = styled(Link)`
  margin: 0px;
  color: white;
  font-family: "Inter";
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  transition: color 0.5 ease-in;

  &:hover {
    color: gray;
  }
`;
