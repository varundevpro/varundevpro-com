import Link from "next/link"
import styled from "styled-components"

const figmaPlugins = [
  {
    title: 'Tailwind Color Palettes',
    duration: '2020 — Present',
    imgSrc: '/images/tailwind-color-palettes-figma-plugin.png',
    href: 'https://www.figma.com/community/plugin/853905984020840743/tailwind-color-palettes'
  },
  {
    title: 'Sine wave',
    duration: '2022 — Present',
    imgSrc: '/images/sine-wave-figma-plugin.png',
    href: 'https://www.figma.com/community/plugin/1122523615671222202/sine-wave'
  },
  {
    title: 'Swap colors (Switch Selection Colors)',
    duration: '2022 — Present',
    imgSrc: '/images/swap-colors-figma-plugin.png',
    href: 'https://www.figma.com/community/plugin/1124704493694112597/swap-colors-switch-selection-colors'
  },
  {
    title: 'Text Manager',
    duration: '2022 — Present',
    imgSrc: '/images/text-manager-figma-plugin.png',
    href: 'https://www.figma.com/community/plugin/1136320336827754028/text-manager-create-edit-multiple-textboxes-easily'
  },
  {
    title: 'Bolt',
    duration: '2022 — Present',
    imgSrc: '/images/bolt-figma-plugin.png',
    href: 'https://www.figma.com/community/plugin/1138428830081065403/bolt'
  },
  {
    title: 'Zoom To Fill',
    duration: '2025 — Present',
    imgSrc: '/images/zoom-figma-plugin.png',
    href: 'https://www.figma.com/community/plugin/1460861262046590167/zoom'
  },
  {
    title: 'Radix Colors',
    duration: '2025 — Present',
    imgSrc: '/images/radix-colors-plugin.png',
    href: 'https://www.figma.com/community/plugin/1464940434249375502/radix-color-palettes'
  },
  {
    title: 'Aspect Ratio',
    duration: '2025 — Present',
    imgSrc: '/images/aspect-ratio-plugin.png',
    href: 'https://www.figma.com/community/plugin/1464506035886542694/aspect-ratio-with-mult-edit'
  },
]

const penpotPlugins = [
  {
    title: 'Favicon Generator',
    duration: '2024 — Present',
    imgSrc: '/images/favicon-penpot-plugin.png',
    href: 'https://penpot.app/penpothub/plugins/icons-icns-generator'
  },
  {
    title: 'Shapes',
    duration: '2024 — Present',
    imgSrc: '/images/shapes-penpot-plugin.png',
    href: 'https://penpot.app/penpothub/plugins/shapes'
  },
  {
    title: 'Aspect Ratio',
    duration: '2025 — Present',
    imgSrc: '/images/aspect-ratio-plugin.png',
    href: 'https://penpot.app/penpothub/plugins/aspect-ratio'
  }
]

const chromeExtensions = [
  {
    title: 'Inspect Pixels',
    duration: '2024 — Present',
    imgSrc: '/images/inspect-pixels-chrome-extension.png',
    href: 'https://chromewebstore.google.com/detail/inspect-pixels/alohiholnljinkldlnacfiannbbanfjm'
  }
]

export const SideProjects = () => {
  return (
    <Wrapper id="programs">

    <Heading>Side Projects</Heading>

    <SubHeading>Figma plugins</SubHeading>
    <StyledList>
      {figmaPlugins.map((project, idx) => {
        return (
          <StyledListItem key={idx}>
            <Article>
              <ArticleLink href={project.href} target="_blank" rel="noopener noreferrer">
                <Left>
                  <img src={project.imgSrc} alt="" width={48} height={48} />
                </Left>
                <Right>
                  <ArticleTitle>{project.title}</ArticleTitle>
                  <ArticleDuration>{project.duration}</ArticleDuration>
                </Right>
              </ArticleLink>
            </Article>
          </StyledListItem>
        )
      })}
    </StyledList>
    
    <SubHeading>Penpot plugins</SubHeading>
    <StyledList>
      {penpotPlugins.map((project, idx) => {
        return (
          <StyledListItem key={idx}>
            <Article>
              <ArticleLink href={project.href} target="_blank" rel="noopener noreferrer">
                <Left>
                  <img src={project.imgSrc} alt="" width={48} height={48} />
                </Left>
                <Right>
                  <ArticleTitle>{project.title}</ArticleTitle>
                  <ArticleDuration>{project.duration}</ArticleDuration>
                </Right>
              </ArticleLink>
            </Article>
          </StyledListItem>
        )
      })}
    </StyledList>
    
    <SubHeading>Chrome Extensions</SubHeading>
    <StyledList>
      {chromeExtensions.map((project, idx) => {
        return (
          <StyledListItem key={idx}>
            <Article>
              <ArticleLink href={project.href} target="_blank" rel="noopener noreferrer">
                <Left>
                  <img src={project.imgSrc} alt="" width={48} height={48} />
                </Left>
                <Right>
                  <ArticleTitle>{project.title}</ArticleTitle>
                  <ArticleDuration>{project.duration}</ArticleDuration>
                </Right>
              </ArticleLink>
            </Article>
          </StyledListItem>
        )
      })}
    </StyledList>

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

const SubHeading = styled.h3`
  opacity: 0.7;
  text-transform: uppercase;
  margin: 1.5em 0 0.75em;

  font-size: 1rem;
  line-height: 1.16em;
  font-weight: 600;
  letter-spacing: .05em;

  @media screen and (max-width: 40em) {
    font-size: 0.8rem;
  }
`

const StyledList = styled.ul`
  margin-top: 1rem;
  margin-bottom: 3rem;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1rem;
  grid-column-gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 40em) {
    margin-top: 0.5rem;
    margin-bottom: 2rem;
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
  display: contents;
  img {
  border
  }
`

const Right = styled.div`
`

const ArticleLink = styled(Link)`
  padding: 1rem;
  width: 100%;

  display: flex;
  gap: 1rem;
  align-items: center;
`

const ArticleTitle = styled.h2`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;

  color: #f8fafc;
`

const ArticleDuration = styled.p`
  margin: 0;
  margin-top: 0.25rem;
  font-size: 1rem;
  opacity: 0.5;

  color: #f8fafc;
`

const StyledSeeMore = styled(Link)`
  display: inline-flex;
  text-decoration: underline;
  padding: 1rem;
  border-radius: 1rem;
  margin-left: -1rem;
  margin-right: -1rem;

  :hover {
    background-color: #27272a;
  }
`