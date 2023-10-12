import React, { ReactNode } from "react";
import styled from "styled-components";

import { theme } from ".";

interface BlockquoteProps {
  children?: ReactNode;
}

const Blockquote: React.FC<BlockquoteProps> = ({ children }) => {
  return (
    <BlockquoteWrapper>
      <QuoteLine />
      <QuoteContent>{children}</QuoteContent>
    </BlockquoteWrapper>
  );
};

export default Blockquote;

const BlockquoteWrapper = styled.div`
  display: flex;
  margin: 16px 0;
`;

const QuoteLine = styled.div`
  width: 4px;
  background: ${theme.colors.text.dark.white};
  margin-right: 8px;
  border-radius: 2px;
`;

const QuoteContent = styled.div`
  padding: 8px 16px;
  font-style: italic;
`;
