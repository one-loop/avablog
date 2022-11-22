import React from 'react'

const Author = ({ author }) => {
  return (
    <div className="blog-info-left">
      <img className="author-avatar" alt={author.name} title={author.name} src={author.photo.url} />
      <span>{author.name}</span>
    </div>
  )

}

export default Author