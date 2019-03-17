import React from 'react'
import Link from 'gatsby-link'

import image1 from '../assets/bird-lt.png';
import image2 from '../assets/bird-sun.png';

const IndexPage = () => (
  <div>
    <section className="clearfix">
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
    <section className="header--about section--internal">
      <div className="row">
        <span className="object--circle"></span>
        <span>
          <img className="img-bird" src={image1} style={{width: "340px", bottom: "38em", left: "20em"}} alt="Individual project page screenshots" />
        </span>
        <span>
          <img className="img-bird" src={image2} style={{width: "340px", bottom: "7em", left: "0"}} alt="Individual project page screenshots" />
        </span>
        <div className="header--about--content">
          <h2 className="header--large">About me</h2>
          <p>Originally from Michigan, Ali decided to escape the frigid temperatures of the north by going to art school in Savannah, GA. After earning a degree in graphic design from The Savannah College of Art and Design (SCAD - go bees), Ali moved to Washington, D.C., where she currently resides. After working in the industry for a number of years, Ali has been lucky enough to: use her design and user experience knowledge to bring life to client’s ideas, make design and UX more of a focus within the organizations she’s worked for, manage teams of designers and, teach UX to others, in the hope that we can all build more user friendly products. Most importantly, Ali lives to be challenged. She has worked for a number of different organizations from the Government, to non-profits, to advertising agencies, all with the hope of finding the next complex and interesting problem to solve.</p>

          <p>Although trained as a visual designer, Ali learned at a very early stage in her career the importance of UX. Not just that building a great experience, for the user, meant a great product but the value in UX deliverables. Building wireframes or user flows to allow her clients or coworkers to better understand her vision. Doing user testing and interviews to really understand what users want and need. Her mantra is, why guess at design and functionality when you can know what your clients and users want by asking them the right (non-leading) questions.</p>

          <p>I’m always looking for new and interesting challenges. Have one or just want to connect? I’d love to hear from you!</p>
          <Link className="button button--dark" to="mailto:alifelski@gmail.com">Reach Out</Link>
        </div>
      </div>
    </section>
  </div>
)

export default IndexPage
