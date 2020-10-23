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
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const BlogLayout = ({ children }) => {
  return (
    <ThemeProvider theme={lightThemeBlog}>
      <GlobalBlogStyles />
      <div className="container mx-auto px-4 md:px-32 lg:px-48 xl:px-56">
        <div className="flex flex-col sm:flex-row flex-col-reverse">
          <div className="flex-grow py-8">
            <Link to="/blog" className="flex items-center">
              <ProfileImage size="small" />
              <div className="flex flex-col ml-4">
                <span className= "text-body-gray -mb-1 text-4xl ">Josh Unwin</span>
                <span className="text-gray-500 text-xl -mt-1">A blog</span>
              </div>
            </Link>
          </div>
          <div className="flex justify-end">
            <ProfileButton />
          </div>
        </div>
        <hr className="" />
        {children}
      <div>
        <hr />
        <div className="w-full flex justify-end py-5">
          <a href="http://www.github.com/josh-unwin" target="_blank" rel="noreferrer"><FaGithub className="social-icon text-2xl text-body-gray hover:text-link-blue mr-3" /></a>
          <a href="https://www.linkedin.com/in/josh-unwin-a4735637/" target="_blank" rel="noreferrer"><FaLinkedin className="social-icon text-2xl hover:text-link-blue text-body-gray mr-3" /></a>
          <a href="https://www.twitter.com/joshunwin/" target="_blank" rel="noreferrer"><FaTwitter className="social-icon text-2xl text-body-gray hover:text-link-blue" /></a>
        </div>
      </div>
      </div>
    </ThemeProvider>
  )
}

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogLayout