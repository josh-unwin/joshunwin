import React, { useState, useEffect } from 'react';
import { Link, useStaticQuery, graphql } from "gatsby";
import { FaCaretDown, FaSortDown } from 'react-icons/fa';

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
        <div onClick={() => { setFilterByMenuOpen(!filterByMenuOpen) }} className="p-2 my-2 border rounded-l-sm border-r-0 text-xs cursor-pointer bg-gray-200 flex-grow">Filter By:</div>
        <div className="relative p-2 my-2 mr-3 border rounded-r-sm text-xs cursor-pointer hover:bg-gray-300 w-40">
          <div className="flex" onClick={() => { setFilterByMenuOpen(!filterByMenuOpen) }}><span className="flex-grow capitalize">{currentFilter}</span><FaSortDown /></div>
          {filterByMenuOpen &&
            <button onClick={() => { setFilterByMenuOpen(false) }} className="hideDropdown inset-0 w-full h-full fixed cursor-default"></button>
          }
          {filterByMenuOpen &&
            <div className="dropdownMenu absolute bg-white rounded shadow mt-2 text-xs w-40 right-0">
              {postCategories.map(category =>
                <div>
                  <Link to={category.toLowerCase() === "all" ? "/blog" : `/blog/${category.toLowerCase().replace(" ", "-")}`}>
                    {category}
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