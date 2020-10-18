import React from "react"
import '../styles/tailwind.css';
import '../styles/global.scss';
import { GlobalBlogStyles } from '../styles/globalBlog';
import PropTypes from "prop-types";
import { ThemeProvider } from 'styled-components';
import { Link } from 'gatsby';
import { lightThemeBlog } from '../styles/themeBlog';
import ProfileImage from '../components/profileImage';
import ProfileButton from '../components/ProfileButton';

const BlogLayout = ({ children }) => {
  return (
    <ThemeProvider theme={lightThemeBlog}>
      <GlobalBlogStyles />
      <div className="container mx-auto px-4 md:px-32 lg:px-48 xl:px-56">
        <div className="flex">
          <div className="flex-grow py-8">
            <Link to="/blog" className="flex items-center">
              <ProfileImage size="small" />
              <div className="flex flex-col ml-4">
                <span className= "text-body-gray -mb-1 text-4xl ">Josh Unwin</span>
                <span className="text-gray-500 text-xl -mt-1">A blog</span>
              </div>
            </Link>
          </div>
          <div>
            <ProfileButton />
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