import React from 'react'
import Image from 'next/image'

const Author = ({ author }) => {
  return (
    <div className="blog-info-left">
      <Image className="author-avatar" alt={author.name} title={author.name} src={author.photo.url} />
      <span>{author.name}</span>
    </div>
  )

}

export default Author