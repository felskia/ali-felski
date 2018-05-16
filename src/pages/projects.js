import React from 'react'
import Link from 'gatsby-link'

import image1 from '../assets/wapo-thumb.jpg';
import image2 from '../assets/robotheads-thumb.jpg';
import image3 from '../assets/satsummit-thumb.jpg';
import image4 from '../assets/observe-thumb.jpg';

const About = () => (
  <div className="row">
    <div className="projects">
      <h1 className="header--xxlarge">These are a few of my favorite things.</h1>
      <ul>
        <li className="project-thumb project-thumb--red project-thumb--sm">
          <img className="img-about1 project-thumb--center" src={image1} alt="Individual project page screenshots" />
        </li>
        <li className="project-thumb project-thumb--orange project-thumb--sm">
          <img className="img-about1 project-thumb--center project-thumb--center-vert" src={image2} alt="Individual project page screenshots" />
        </li>
        <li className="project-thumb project-thumb--blue project-thumb--sm">
          <img className="img-about1" src={image3} alt="Individual project page screenshots" />
        </li>
        <li className="project-thumb project-thumb--green project-thumb--sm">
          <img className="img-about1 project-thumb--center project-thumb--center-vert" src={image4} alt="Individual project page screenshots" />
        </li>
        <li className="project-thumb project-thumb--blue project-thumb--sm">
          <img className="img-about1 project-thumb--center" src={image1} alt="Individual project page screenshots" />
        </li>
        <li className="project-thumb project-thumb--red project-thumb--sm">
          <img className="img-about1 project-thumb--center project-thumb--center-vert" src={image2} alt="Individual project page screenshots" />
        </li>
        <li className="project-thumb project-thumb--blue project-thumb--sm">
          <img className="img-about1" src={image3} alt="Individual project page screenshots" />
        </li>
        <li className="project-thumb project-thumb--green project-thumb--sm">
          <img className="img-about1 project-thumb--center project-thumb--center-vert" alt="Individual project page screenshots" />
        </li>
      </ul>
    </div>
  </div>
)

export default About
