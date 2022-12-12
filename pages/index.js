import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { PostCard, Categories, PostWidget, Community } from '../components';
import { getPosts } from '../services';

// const posts = [
//   { title: '15 Great Startup Ideas', excerpt: 'Lorem ipsum' },
//   { title: 'Book Summary: Atomic Habits', excerpt: 'What is the meaning of life the universe and everything' },
// ];

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>AVA - Blog</title>
        <meta name="description" content="AVA Blog" />
        <link rel="icon" href="/favicon round.png" />
      </Head>
      <main>
        <aside className="">
          <Categories category={posts} />
        </aside>
        <div className="outer-post-container">
          <PostWidget />
          <div className="post-section">
            <h3 className="latest">Latest</h3>
            {posts.map((post) => < PostCard post={post.node} key={post.title} />)}
            <Community />
          </div>
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  }
}
