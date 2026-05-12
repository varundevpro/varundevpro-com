import { serialize } from 'next-mdx-remote/serialize'
import { contentHelpers } from '../../helpers/content'
import { MDXContent } from '../../components/MDXContent';
import styled from 'styled-components';
import Link from 'next/link';

export async function getStaticProps(props) {
  const slug = props.params.slug;
  const data = await contentHelpers.programs.getArticleFromSlug(slug)

  // MDX text - can be from a local file, database, anywhere
  const source = data.content
  const mdxSource = await serialize(source)
  return { props: { source: mdxSource, frontmatter: data.frontmatter } }
}

export async function getStaticPaths() {
  const slugs = await contentHelpers.programs.getAllSlugs()

  const paths = slugs.map(slug => ({ params: { slug: slug } }))
  
  return {
    paths: paths,
    fallback: false,
  }
}


export default function TestPage({ source, frontmatter }) {
  return (
    <Main>
      <Link href="/programs">&larr; Back</Link>

      <Heading>{frontmatter.title}</Heading>
      <MDXContent source={source} />
    </Main>
  )
}

const Main = styled.main`
  padding-top: 4rem;
  padding-bottom: 4rem;
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
`

const Heading = styled.h2`
  margin-top: 1rem;

  font-size: 3rem;
  line-height: 1.16em;
  font-weight: 600;
  letter-spacing: -.025em;

  @media screen and (max-width: 40em) {
    font-size: 2rem;
  }
`