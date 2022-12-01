import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Categories, Loader, PostWidget, Community } from '../../components';

const CategoryPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

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
            <h3 className="latest">Latest {posts[0].node.category.name} Posts</h3>
              {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
            <Community />
          </div>
        </div>
      </main>
    </>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}