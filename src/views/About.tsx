import React from "react";
import styled from "styled-components";

import { Ivan } from "../assets/images";
import CustomMarkdown from "../components/CustomMarkdown";
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

const markdown = `
# Heading1
## Heading2
### Heading3
#### Heading4
##### Heading5
###### Heading6
**bold text**
*italicized text*
> blockquote

1. First item
2. Second item
3. Third item

- First item
- Second item
- Third item

\`code\`

Horizontal Line

---

Link	[title](https://www.example.com)

Image	![alt text](image.jpg)

`;

const About: React.FC = () => {
  return (
    <div>
      <HeroContainer>
        <HeroText>
          <Heading4>
            I&apos;m studying Computer Science at the University of Waterloo. A
            software engineer constantly exploring and pushing the bounderies of
            tech.
          </Heading4>
          <br />
          <Heading4>
            Avid rock climber, marine organism enthusiast, and Tetris addict.
          </Heading4>
        </HeroText>
        <Image src={Ivan} />
      </HeroContainer>
      <CustomMarkdown markdown={markdown} />
      <br />
      <Heading4>Reading</Heading4>
      <Heading4>Learning</Heading4>
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
      <br />
      <Caption>Caption</Caption>
    </div>
  );
};

export default About;

const HeroContainer = styled.div`
  display: flex;
`;

const HeroText = styled.div`
  padding-right: 16px;
`;

const Image = styled.div<{ src: string }>`
  height: 200px;
  width: 200px;
  background-image: ${(props) => (props.src ? `url("${props.src}")` : "none")};
  background-size: cover;
  flex: 0 0 auto;
`;
