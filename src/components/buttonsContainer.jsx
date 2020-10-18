import React from "react";
import { FaRss, FaCode } from 'react-icons/fa';
import { Link } from 'gatsby'; 

const ButtonsContainer = (props) => {
  return (
    <div className={`absolute bottom-0 flex mb-4  sm:mb-32 ${props.isProjectsOpen || props.isPrimaryCardFlipped ? "hidden" : ""}`}>
      <div className="w-24 sm:w-40">
        <button onClick={() => {props.setIsProjectsOpen(!props.isProjectsOpen)}} className="hover-link cursor-pointer flex flex-col items-center">
          <FaCode className="text-3xl sm:text-4xl mb-2" />
          <span className="text-sm">Code Projects</span>
        </button>
      </div>
      <div className="w-24 sm:w-40">
        <Link to="/blog" className="hover-link cursor-pointer flex flex-col items-center">
          <FaRss className="text-3xl sm:text-4xl mb-2" />
          <span className="text-sm">Blog</span>
        </Link>
      </div>
    </div>
  )
}

export default ButtonsContainer