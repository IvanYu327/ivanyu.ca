import React from "react";
import Markdown from "react-markdown";
// import remarkGfm from "remark-gfm";

import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Body,
  BodyBold,
  BodyMedium,
  Caption,
  ListItem,
  Hyperlink,
  OrderedList,
  UnorderedList
} from "../styles";
import Blockquote from "../styles/Blockquote";

interface CustomMarkdownProps {
  markdown: string;
}

const CustomMarkdown: React.FC<CustomMarkdownProps> = ({ markdown }) => {
  return (
    <Markdown
      // remarkPlugins={[remarkGfm]}
      components={{
        a: Hyperlink,
        blockquote: Blockquote,
        // br,
        // code,
        // em,
        h1: Heading1,
        h2: Heading2,
        h3: Heading3,
        h4: Heading4,
        h5: Heading5,
        h6: Heading6,
        // hr,
        // img,
        li: ListItem,
        ul: UnorderedList,
        ol: OrderedList,
        p: Body,
        // pre,
        strong: BodyBold
      }}
    >
      {markdown}
    </Markdown>
  );
};

export default CustomMarkdown;
