import { Link } from "react-router-dom";
import styled from "styled-components";
import { DefaultTheme } from "styled-components";

import { mediaQueries } from "../utils/responsive";

export const theme: DefaultTheme = {
  colors: {
    background: {
      dark: "#0d1117",
      light: "#FFFFFF"
    },
    text: {
      dark: {
        white: "#FFFFFFDE",
        gray: "#FFFFFF88"
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

const fontFamily = '"SpaceGrotesk", sans-serif';

export const Heading1 = styled.h1`
  font-family: ${fontFamily};
  color: ${theme.colors.text.dark.gray};
  margin: 32px 0;
  font-size: 48px;
  font-weight: 400;
`;

export const Heading2 = styled.h2`
  font-family: ${fontFamily};
  color: ${theme.colors.text.dark.gray};
  margin: 27px 0;
  font-size: 36px;
  font-weight: 400;
`;

export const Heading3 = styled.h3`
  font-family: ${fontFamily};
  color: ${theme.colors.text.dark.gray};
  margin: 18px 0;
  font-size: 24px;
  font-weight: 400;
`;

export const Heading4 = styled.h4`
  font-family: ${fontFamily};
  color: ${theme.colors.text.dark.gray};
  margin: 15px 0;
  font-size: 20px;
  font-weight: 400;
`;

export const Heading5 = styled.h5`
  font-family: ${fontFamily};
  color: ${theme.colors.text.dark.gray};
  margin: 12px 0;
  font-size: 16px;
  font-weight: 400;
`;

export const Heading6 = styled.h6`
  font-family: ${fontFamily};
  color: ${theme.colors.text.dark.gray};
  margin: 0px;
  font-size: 12px;
  font-weight: 400;
`;

export const LargeBody = styled.p`
  margin: 0px;
  font-family: ${fontFamily};
  font-size: 20px;
  font-weight: 400;
  color: ${theme.colors.text.dark.white};
`;

export const LargeBodyMedium = styled.p`
  margin: 0px;
  font-family: ${fontFamily};
  font-size: 20px;
  font-weight: 600;
  color: ${theme.colors.text.dark.white};
`;

export const LargeBodyBold = styled.p`
  margin: 0px;
  font-family: ${fontFamily};
  font-size: 20px;
  font-weight: 700;
  color: ${theme.colors.text.dark.white};
`;

export const Body = styled.p`
  padding: 0px;
  margin: 0px;
  margin-top: 8px;
  font-family: ${fontFamily};
  font-size: 16px;
  font-weight: 400;
  color: ${theme.colors.text.dark.white};
`;

export const BodyMedium = styled.p`
  padding: 0px;
  margin: 0px;
  font-family: ${fontFamily};
  font-size: 16px;
  font-weight: 600;
  color: ${theme.colors.text.dark.white};
`;

export const BodyBold = styled.p`
  padding: 0px;
  margin: 0px;
  font-family: ${fontFamily};
  font-size: 16px;
  font-weight: 700;
  color: ${theme.colors.text.dark.white};
`;

export const Caption = styled.p`
  padding: 0px;
  margin: 0px;
  font-family: ${fontFamily};
  font-size: 12px;
  font-weight: 400;
  font-style: italic;
  color: ${theme.colors.text.dark.white};
`;

export const Hyperlink = styled.a`
  font-family: ${fontFamily};
  color: ${theme.colors.text.dark.white};
  margin: 0px;
  font-size: inherit;
  font-weight: 400;
  transition: color 0.05s ease-in;

  &:hover {
    color: ${theme.colors.text.dark.gray};
    text-decoration: none;
  }
`;

export const ListItem = styled.li`
  font-family: ${fontFamily};
  font-size: 16px;
  font-weight: 400;
  color: ${theme.colors.text.dark.white};
`;

export const OrderedList = styled.ol`
  margin: 0px;
  font-family: ${fontFamily};
  font-size: 16px;
  font-weight: 400;
  color: ${theme.colors.text.dark.white};
`;

export const UnorderedList = styled.ul`
  margin: 0px;
  font-family: ${fontFamily};
  font-size: 16px;
  font-weight: 400;
  color: ${theme.colors.text.dark.white};
`;

export const StyledLink = styled(Link)`
  margin: 0px;
  color: white;
  font-family: ${fontFamily};
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  transition: color 0.5 ease-in;

  &:hover {
    color: gray;
  }
`;
