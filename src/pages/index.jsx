import Head from 'next/head'
import { Home } from '../layouts/Home'
import { Footer } from '../components/Footer'
import { contentHelpers } from '../helpers/content'

export async function getStaticProps(props) {
  const data = await contentHelpers.programs.getArticleList()

  return { props: { articleFrontmatterList: data } }
}

export default function Pages_Home(props) {
  return (
    <div>
      <Head>
        <title>Varun - Product Developer</title>
        <meta name="description" content="Varun is a product developer currently based in India working with React and JavaScript." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Home articleFrontmatterList={props.articleFrontmatterList}/>
      </main>

      <Footer/>
    </div>
  )
}
