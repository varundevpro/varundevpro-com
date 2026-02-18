import { MDXRemote } from 'next-mdx-remote'
import styled from 'styled-components'
import CodeBlock from './CodeBlock';

const components = {
  pre: props => <div {...props} />,
  code: CodeBlock
}

export const MDXContent = ({source}) => {
  return <Wrapper><MDXRemote {...source} components={components} /></Wrapper>
}

const Wrapper = styled.div`
  margin-top: 3rem;

  a {
    text-decoration: underline;
  }
`