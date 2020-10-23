import React, { useState, useEffect } from 'react';
import { Link, useStaticQuery, graphql } from "gatsby";
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';

const BlogFilterControls = ({ setSortByMethod, sortByMethod, location }) => {
  const regexForUrlExtraction = /\/.*\/(.*)/;
  const currentFilter = regexForUrlExtraction.exec(location.pathname) ? 
    regexForUrlExtraction.exec(location.pathname)[1].replace("-", " ") : "All"
  const [filterByMenuOpen, setFilterByMenuOpen] = useState(false);

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(blog)/.*.md$/"}}) {
        distinct(field: frontmatter___categories)
      }
    }
  `)

  const postCategories = data.allMarkdownRemark.distinct;

  useEffect(() => {
    if (!postCategories.includes("All")) {
      postCategories.unshift("All");
    }
  }, []);

  return (
    <div className="flex justify-end">
      <div className="flex">
        <div onClick={() => { setFilterByMenuOpen(!filterByMenuOpen) }} className="p-3 my-2 cursor-pointer flex-grow">Filter By:</div>
        <div className="relative p-3 my-2 cursor-pointer hover:bg-gray-100 w-40">
        <div className="flex items-center" onClick={() => { setFilterByMenuOpen(!filterByMenuOpen) }}>
          <span className="flex-grow capitalize">{currentFilter}</span>
          {filterByMenuOpen ? <FaCaretUp /> : <FaCaretDown />}
        </div>
          {filterByMenuOpen &&
            <button onClick={() => { setFilterByMenuOpen(false) }} className="hideDropdown inset-0 w-full h-full fixed cursor-default"></button>
          }
          {filterByMenuOpen &&
            <div className="dropdownMenu absolute bg-white shadow-md mt-2 p-3 w-40 right-0">
              {postCategories.map(category =>
                <div className="p-1">
                  <Link to={category.toLowerCase() === "all" ? "/blog" : `/blog/${category.toLowerCase().replace(" ", "-")}`}>
                    <span className="text-body-gray hover:text-link-blue">{category}
                      </span>
                  </Link>
                </div>
              )}
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default BlogFilterControls