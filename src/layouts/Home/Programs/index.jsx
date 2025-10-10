import Link from "next/link"
import styled from "styled-components"

export const Programs = ({articleFrontmatterList}) => {
  return (
    <Wrapper id="programs">

    <Heading>Programs</Heading>

    <StyledList>
      {articleFrontmatterList.slice(0, 5).map(articleFrontmatter => {
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

    <StyledSeeMore href='/programs'>See more</StyledSeeMore>
    
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 2rem 1rem;

  margin-left: auto;
  margin-right: auto;
  max-width: 1024px;

  @media (min-width: 640px) {
      padding: 3rem 1.5rem;
  }

  @media (min-width: 1024px) {
      padding: 4rem 2rem;
  }
`

const Heading = styled.h2`
  margin: 1.5em 0 0.75em;

  font-size: 2rem;
  line-height: 1.16em;
  font-weight: 700;
  letter-spacing: -.025em;

  @media screen and (max-width: 40em) {
    font-size: 1.5rem;
  }
`

const StyledList = styled.ul`
  margin: 3rem 0 1rem;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  
  @media (min-width: 640px) {
    grid-row-gap: 2rem;
    grid-column-gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 40em) {
    margin: 2rem 0 1rem;
  }
`

const StyledListItem = styled.li`
  display: flex;
  width: 100%;
`

const Article = styled.article`
  border-radius: 1rem;
  margin-left: -1rem;
  margin-right: -1rem;
  display: flex;
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
  padding: 1rem;
  width: 100%;
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

  @media screen and (max-width: 40em) {
    font-size: 1.25rem;
  }
`

const ArticleDescription = styled.p`
  margin: 0.5rem 0 0;

  color: #cbd5e1;
`

const StyledSeeMore = styled(Link)`
  display: inline-flex;
  text-decoration: underline;
  text-decoration-color: rgba(255, 255, 255, 0.25);
  text-underline-offset: 2px;
  padding: 0.5em 1rem;
  border-radius: 1rem;
  margin-left: -1rem;
  margin-right: -1rem;

  :hover {
    background-color: #27272a;
  }
`