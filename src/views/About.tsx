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
  Heading5,
  Heading6,
  Hyperlink,
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
>
> blockquote
> 
> blockquote
> 
> blockquote

1. First item
2. Second item
3. Third item

- First item
- Second item
- Third item

\`\`\`ruby
var add2 = function(number) {
  return number + 2;
}
\`\`\`

Horizontal Line

---

Link	[title my g](https://www.example.com)

Image	![alt text](image.jpg)

`;

const About: React.FC = () => {
  return (
    <div>
      <HeroContainer>
        <HeroText>
          <LargeBody>
            I&apos;m studying Computer Science at the University of Waterloo. A
            software engineer constantly exploring and pushing the bounderies of
            tech.
          </LargeBody>
          <br />
          <LargeBody>
            Avid rock climber, marine organism enthusiast, and Tetris addict.
          </LargeBody>
        </HeroText>
        <Image src={Ivan} />
      </HeroContainer>
      <Heading5>this website. </Heading5>
      <Body>Last updated Oct 12, 2023</Body>
      <br /> <br />
      <Heading5>typography </Heading5>
      <Body>
        Everything is in the system default Inter font right now. Currently
        looking for a fruiter sans serif font.
      </Body>
      <br /> <br />
      <Heading5>technical</Heading5>
      <Body>
        Built with{" "}
        <Hyperlink href="https://react.dev/" target="_blank">
          React
        </Hyperlink>
        ,{" "}
        <Hyperlink href="https://www.typescriptlang.org/" target="_blank">
          Typescript
        </Hyperlink>
        , and{" "}
        <Hyperlink href="https://styled-components.com/" target="_blank">
          styled-components
        </Hyperlink>
        . Deployed and hosted on [????]. Source code available on{" "}
        <Hyperlink href="https://github.com/IvanYu327/ivanyu.ca" target="blank">
          Github
        </Hyperlink>
        .
      </Body>
      {/* <Heading4>Photography </Heading4>
      <Body>
        All images were taken or created by Linus Rogge, if not stated
        otherwise. I aim to provide sources for all imagery on this site.
        However, due to the nuances of the internet and platforms for visual
        inspiration, it’s not always possible to do so. Credits on most images
        can be found by hovering them.
      </Body> */}
      <br /> <br />
      <Heading5>inspiration </Heading5>
      <Body>
        People and pages that inspired the current version of this site —
        visually, substantially, or personally.
      </Body>
      <br />
      <Body>
        <Hyperlink href="https://www.wilburzhang.com/" target="blank">
          wilburzhang.com
        </Hyperlink>
      </Body>
      <Body>
        <Hyperlink href="https://linusrogge.com/" target="blank">
          linusrogge.com
        </Hyperlink>
      </Body>
      <Body>
        <Hyperlink href="https://www.joshlu.me/" target="blank">
          joshlu.me
        </Hyperlink>
      </Body>
      <Body>
        <Hyperlink href="https://jennyzhao.webflow.io/" target="blank">
          jennyzhao.webflow.io
        </Hyperlink>
      </Body>
      <Body>
        <Hyperlink href="https://kelvinzhang.com/" target="blank">
          kelvinzhang.com
        </Hyperlink>
      </Body>
      {/* <Body>good people </Body>
      <Body>
        There wouldn’t be enough space to list every important person here, but
        these are a few of the good souls that made a positive impact in my
        life: Anton Stallbörger Neo Mohr Benjamin Hutter Moritz Breuer Moritz
        Kindler Henri Bredt Alexander Zank Leander Lenzing Malte Körte Emil Dax
        Florian Kiem Nils Eller Raphael Volpert Valentin Rudloff Sam di Mauro
        Piet Terheyden
      </Body> */}
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
