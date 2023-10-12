import React from "react";
import Markdown from "react-markdown";

import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Body,
  BodyBold,
  BodyMedium,
  Caption
} from "../styles";

interface CustomMarkdownProps {
  markdown: string;
}

const CustomMarkdown: React.FC<CustomMarkdownProps> = ({ markdown }) => {
  return (
    <Markdown
      components={{
        // Map `h1` (`# heading`) to use `h2`s.
        // a,
        // blockquote,
        // br,
        // code,
        // em,
        h1: Heading1,
        h2: Heading2,
        h3: Heading3,
        h4: Heading4,
        // h5,
        // h6,
        // hr,
        // img,
        // li: Body,
        // ol,
        p: Body,
        // pre,
        strong: BodyBold
        // ul,
      }}
    >
      {markdown}
    </Markdown>
  );
};

export default CustomMarkdown;
