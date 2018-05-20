import React from 'react'
import Link from 'gatsby-link'

export { default as Kiss } from './kiss.js';
export { default as Nasa } from './nasa.js';
export { default as Observe } from './observe.js';
export { default as Robots } from './robots.js';
export { default as Satsummit } from './satsummit.js';
export { default as SY } from './service-year.js';
export { default as Wapo } from './wapo.js';
export { default as Chemist } from './crazed-chemist.js';

import image1 from '../../assets/wapo-thumb.jpg';
import image2 from '../../assets/robotheads-thumb.jpg';
import image3 from '../../assets/satsummit-thumb.jpg';
import image4 from '../../assets/observe-thumb.jpg';
import image5 from '../../assets/nasa-thumb.jpg';
import image6 from '../../assets/sy-thumb.jpg';
import image7 from '../../assets/chemist-thumb.jpg';
import image8 from '../../assets/kiss-thumb.jpg';

import '../../styles/projects.scss'

const Projects = () => (
  <div className="row">
    <div className="projects">
      <h1 className="header--xlarge">These are a few of my favorite things.</h1>
      <ul>
        <li className="project-thumb project-thumb--red project-thumb--sm">
          <Link to="/projects/wapo">
            <img className="project-thumb--center" src={image1} style={{width: "92%", bottom: "2em"}} alt="Individual project page screenshots" />
          </Link>
        </li>
        <li className="project-thumb project-thumb--orange project-thumb--sm project--up">
          <Link to="/projects/robots">
            <img className="project-thumb--center project-thumb--center-vert" src={image2} style={{width: "83%"}} alt="Individual project page screenshots" />
          </Link>
        </li>
        <li className="project-thumb project-thumb--blue project-thumb--sm">
          <Link to="/projects/satsummit">
            <img className="img-about1" src={image3} style={{width: "90%", bottom: "0", left: "0"}} alt="Individual project page screenshots" />
          </Link>
        </li>
        <li className="project-thumb project-thumb--green project-thumb--sm">
          <Link to="/projects/observe">
            <img className="project-thumb--center project-thumb--center-vert" src={image4} style={{width: "80%", bottom: "-15em"}} alt="Individual project page screenshots" />
          </Link>
        </li>
        <li className="project-thumb project-thumb--blue project-thumb--sm project--up">
          <Link to="/projects/nasa">
            <img className="project-thumb--center" src={image5} style={{width: "92%", bottom: "2em"}} alt="Individual project page screenshots" />
          </Link>
        </li>
        <li className="project-thumb project-thumb--red project-thumb--sm">
          <Link to="/projects/service-year">
            <img className="project-thumb--center project-thumb--center-bottom" style={{width: "95%"}} src={image6}  alt="Individual project page screenshots" />
          </Link>
        </li>
        <li className="project-thumb project-thumb--blue project-thumb--sm">
          <Link to="/projects/crazed-chemist">
            <img className="project-thumb--center project-thumb--center-vert" src={image7} style={{width: "88%", bottom: "0", left: "0"}}alt="Individual project page screenshots" />
          </Link>
        </li>
        <li className="project-thumb project-thumb--green project-thumb--sm project--up">
          <Link to="/projects/kiss">
            <img className="project-thumb--center project-thumb--center-bottom" src={image8} style={{width: "88%"}} alt="Individual project page screenshots" />
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Projects
