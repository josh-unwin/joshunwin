import React from "react"
import '../styles/tailwind.css';
import '../styles/global.scss';
import { GlobalBlogStyles } from '../styles/globalBlog';
import PropTypes from "prop-types";
import { ThemeProvider } from 'styled-components';
import { Link } from 'gatsby';
import { lightThemeBlog } from '../styles/themeBlog';
import ProfileImage from '../components/profileImage';

const BlogLayout = ({ children }) => {
  return (
    <ThemeProvider theme={lightThemeBlog}>
      <GlobalBlogStyles />
      <div className="container mx-auto">
        <div className="py-8 text-4xl">
          <div className="flex items-center">
            <ProfileImage size="small" />
            <Link to="/blog" className= "ml-4 text-body-gray">Josh Unwin</Link>
          </div>
        </div>
        <hr className="mb-6" />
        {children}
      </div>
    </ThemeProvider>
  )
}

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogLayout