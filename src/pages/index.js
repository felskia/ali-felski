import React from 'react'
import Link from 'gatsby-link'

import image1 from '../assets/wapo-thumb.jpg';
import image2 from '../assets/robotheads-thumb.jpg';
import image3 from '../assets/satsummit-thumb.jpg';
import image4 from '../assets/observe-thumb.jpg';
import resume from '../assets/ali-resume-2018.pdf';

const IndexPage = () => (
  <div>
    <section className="header--home--wrapper clearfix">
      <div className="header--home">
        <div className="row">
          <div className="header-content-wrapper">
            <h1 className="logo">Ali felski</h1>
            <h1 className="header--xlarge">Design, UX, Illustration & Design Direction</h1>
            <div className="nav">
              <ul>
                <li>About</li>
                <li>Work</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="header--home--wrapper clearfix">
      <div className="row">
        <h2 className="header--large">About me</h2>
        <p>Originally from Michigan, Ali decided to escape the frigid temperatures of the north by going to art school in Savannah, GA. After earning a degree in graphic design from The Savannah College of Art and Design (SCAD - go bees), Ali moved to Washington, D.C., where she currently resides. After working in the industry for a number of years, Ali has been lucky enough to: use her design and user experience knowledge to bring life to client’s ideas, make design and UX more of a focus within the organizations she’s worked for, manage teams of designers and, teach UX to others, in the hope that we can all build more user friendly products. Most importantly, Ali lives to be challenged. She has worked for a number of different organizations from the Government, to non-profits, to advertising agencies, all with the hope of finding the next complex and interesting problem to solve.</p>

        <p>Although trained as a visual designer, Ali learned at a very early stage in her career the importance of UX. Not just that building a great experience, for the user, meant a great product but the value in UX deliverables. Building wireframes or user flows to allow her clients or coworkers to better understand her vision. Doing user testing and interviews to really understand what users want and need. Her mantra is, why guess at design and functionality when you can know what your clients and users want by asking them the right (non-leading) questions.</p>
        <a className="button margin-bottom--md" href={resume} target="_blank">Download My Resume</a>
      </div>
    </section>
  </div>
)

export default IndexPage
