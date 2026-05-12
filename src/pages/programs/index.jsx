import Link from "next/link"
import styled from "styled-components"
import { contentHelpers } from "../../helpers/content"

export async function getStaticProps(props) {
  const data = await contentHelpers.programs.getArticleList()

  return { props: { articleList: data } }
}

export default function ProgramsListPage(props) {
  return (
    <Main>

    <Heading>Programs</Heading>

    <StyledList>
      {props.articleList.map(articleFrontmatter => {
        return (
          <StyledListItem key={articleFrontmatter.slug}>
            <Article>
              <ArticleLink href={`/programs/${articleFrontmatter.slug}`}>
                <Left>
                <ArticleDate itemProp="published" dateTime={articleFrontmatter.date}>{articleFrontmatter.formattedDate}</ArticleDate>
                </Left>
                <Right>
                  <ArticleTitle>{articleFrontmatter.title}</ArticleTitle>
                  <ArticleDescription>{articleFrontmatter.description}</ArticleDescription>
                </Right>
              </ArticleLink>
            </Article>
        </StyledListItem>
        )
      })}
    </StyledList>
    
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
  /* background-color: #18181b; */
`

const Heading = styled.h1`
  font-size: 3rem;
  line-height: 1.16em;
  font-weight: 600;
  letter-spacing: -.025em;

  @media screen and (max-width: 40em) {
    font-size: 2rem;
  }
`

const StyledList = styled.ul`
  margin-top: 3rem;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (max-width: 40em) {
    margin-top: 2rem;
  }
`

const StyledListItem = styled.li`

`

const Article = styled.article`
  border-radius: 1rem;
  margin-left: -1rem;
  margin-right: -1rem;
  width: 100%;
  width: calc(100% + 2rem);

  :hover {
    background-color: #27272a;
  }
  
`

const Left = styled.div`
`

const Right = styled.div`
`

const ArticleLink = styled(Link)`
  display: block;
  padding: 1rem;
`

const ArticleDate = styled.time`
  color: #94a3b8;
  font-size: 0.9rem;
`

const ArticleTitle = styled.h2`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  font-size: 1.5rem;
  font-weight: 600;

  color: #f8fafc;
`

const ArticleDescription = styled.p`
  margin: 0.5rem 0 0;

  color: #cbd5e1;
`