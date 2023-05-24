import Head from "next/head";
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Chalon. I'm a software engineer and outdoor enthusiast. </p>
      </section>
    </Layout>
  );
}
