import React, { useState, useEffect } from 'react'
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services';
import PostCard from './PostCard';


const PostWidget = ({ category, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(category).then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result))
    }
  }, [slug])

  return (
    <div className="recent-posts">
      <div className="recent-header">
        <h1 className="post-section-title">
          {slug ? `${slug} Posts` : 'Featured Posts'}
        </h1>
        <span className="tag-line">Keep up to date with AVA.</span></div>
      <div className="post-carousel">
        {relatedPosts.map((post, index) => <div className="carousel-item">< PostCard post={post} key={index} /></div>)}
      </div>
    </div>
  )
}

export default PostWidget