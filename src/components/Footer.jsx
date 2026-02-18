import styled from "styled-components";

export const Footer = () => {
  return (
    <Wrapper>
      <a href="https://github.com/varundevpro" target='_blank' rel="noreferrer noopener nofollow">Github</a>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding: 2rem 2rem;
  text-align: center;

  a {
    :hover {
      text-decoration: underline;
    }
  }
`;
