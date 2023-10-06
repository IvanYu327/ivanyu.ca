import React from "react";

import {
  Body,
  BodyBold,
  BodyMedium,
  Caption,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  LargeBody,
  LargeBodyBold,
  LargeBodyMedium
} from "../styles";

const About: React.FC = () => {
  return (
    <div>
      {" "}
      <br />
      <Heading1>Heading 1</Heading1>
      <Heading2>Heading 2</Heading2>
      <Heading3>Heading 3</Heading3>
      <Heading4>Heading 4</Heading4>
      <br />
      <LargeBody>LargeBody</LargeBody>
      <LargeBodyMedium>LargeBodyMedium</LargeBodyMedium>
      <LargeBodyBold>LargeBodyBold</LargeBodyBold>
      <br />
      <Body>Body</Body>
      <BodyMedium>BodyMedium</BodyMedium>
      <BodyBold>BodyBold</BodyBold>
      <Caption>Caption</Caption>
    </div>
  );
};

export default About;
