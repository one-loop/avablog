import React from 'react'
import moment from 'moment';
import Link from 'next/link';

const PostDetail = ({ post }) => {
  return (
    <div className="post-header">
      <div className="post-details">
        <span className="back-to-blog">
          {/* <Link href={`/category/${post.categories[0].slug}`}>← Back to Blog</Link> */}
          <Link href={`/category/${post.category.slug}`}>← Back to Blog</Link>
        </span>
        <span>
          <Link href={`/category/${post.category.slug}`}>
            <span className="category-tag">{post.category.name}</span>
          </Link>
        </span>
        <span className="date" css={{ paddingLeft: "10px" }}>
          {moment(post.createdAt).format('dddd, LL')}
        </span>
      </div>
      <h1 className="blog-post-title">{post.title}</h1>
    </div>
  )

}

export default PostDetail