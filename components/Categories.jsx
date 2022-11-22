import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { getCategories } from '../services'


{/* const categories = [
  { name: "News", slug: "news" },
  { name: "Community", slug: "community" },
  { name: "Book Summaries", slug: "book-summaries" },
  { name: "Creativity", slug: "creativity" },
] */}

const Categories = ({ category }) => {
  // console.log(category);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, []);
  return (
    <div className="categories-aside">
      <Link href="/">
        <button className="category-link">
          <img src="https://img.icons8.com/3d-fluency/28/null/documents.png" className="category-icon" />
          All Posts
        </button>
      </Link>
      {categories.map((category) => (
        <Link href={`/category/${category.slug}`} key={category.slug}>
          <button className="category-link">
            <img src={category.categoryIcon.url} className="category-icon" />
            <span className="category-name">{category.name}</span>
          </button>
        </Link>
      ))}
    </div>
  )
}

{/* <Link href={`/category/${category.slug}`} key={category.slug}> */ }

export default Categories