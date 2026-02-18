import React from "react";
import Prism from "prism-react-renderer/prism";
import Highlight, { defaultProps } from "prism-react-renderer";
import dartLang from "refractor/lang/dart";
import styled from "styled-components";
dartLang(Prism);

export default function CodeBlock({ children, className }) {
  const language = className ? className.replace(/language-/, "") : "";

  // console.log(children, typeof children);

  // Removes last `\n` character
  const cleanedChildren = (typeof children == "string" && children.endsWith('\n')) ? children.substring(0,children.length-1) : children

  return (
    <Highlight
      {...defaultProps}
      Prism={Prism}
      code={cleanedChildren}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <StyledPre className={className}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} style={{}} />
              ))}
            </div>
          ))}
        </StyledPre>
      )}
    </Highlight>
  );
}

const StyledPre = styled.pre`
  background-color: #2a2734;
  color: #9a86fd;
  padding: 20px;
  border-radius: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

  overflow-x: auto;
`