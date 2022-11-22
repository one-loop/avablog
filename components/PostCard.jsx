import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => {
  // console.log(post)
  console.log(post)
  return (
    <div className="blog-post-card">
      <div className="blog-post-card-content">
        <Link href={`/post/${post.slug}`}>
          <h1 className="post-title">
            {post.title}
          </h1>
        </Link>
        <div className="blog-info">
          <div className="blog-info-left">
            <img className="author-avatar" alt={post.author.name} title={post.author.name} src={post.author.photo.url} />
            <span className="date">
              {moment(post.createdAt).format('MMM. Do YYYY')}
            </span>
          </div>
          <span>
            <Link href={`/category/${post.category.slug}`}>
              <span className="category-tag">{post.category.name}</span>
            </Link>
          </span>
        </div>
      </div>
    </div >
  )
}

export default PostCard