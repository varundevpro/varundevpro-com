import path from 'path'
import fsPromises from 'fs/promises'
import matter from 'gray-matter'
import { sync } from 'glob'
import dayjs from 'dayjs'

const programsFolder = path.resolve(process.cwd(), 'src/programs')

const getArticleFromSlug = async (slug) => {
  const articleDir = path.join(programsFolder, `${slug}.mdx`)
  const source = await fsPromises.readFile(articleDir)
  const { content, data } = matter(source)

  return {
    content,
    frontmatter: {
      slug,
      title: data.title,
      description: data.description,
      date: data.date.toISOString(),
      formattedDate: dayjs(data.date).format('MMMM D, YYYY'),
      published: data.published,
      // ...data,
    },
  }
}

const getAllSlugs = async () => {
  const filePaths = sync(`${programsFolder}/*.mdx`)

  const allSlugs = filePaths.map((path) => {
    // holds the paths to the directory of the article
    const pathContent = path.split('/')
    const fileName = pathContent[pathContent.length - 1]
    const [slug, _extension] = fileName.split('.')

    return slug
  })

  // Need to return only `published: true` slugs

  const articlesData = await Promise.all(allSlugs.map(async (slug) => {
    return getArticleFromSlug(slug)
  }))

  const publishedArticles = articlesData.filter(articleData => {
    return articleData.frontmatter.published
  })

  return publishedArticles.map(x => x.frontmatter.slug)
}

const getArticleList = async () => {
  const filePaths = sync(`${programsFolder}/*.mdx`)

  const allSlugs = filePaths.map((path) => {
    // holds the paths to the directory of the article
    const pathContent = path.split('/')
    const fileName = pathContent[pathContent.length - 1]
    const [slug, _extension] = fileName.split('.')

    return slug
  })

  // Need to return only `published: true` slugs

  const articlesData = await Promise.all(allSlugs.map(async (slug) => {
    return getArticleFromSlug(slug)
  }))

  const sortedArticles = articlesData.sort((a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  })

  return sortedArticles.map(x => x.frontmatter)
}

export const programs = {
  getArticleList,
  getAllSlugs,
  getArticleFromSlug
}