import React from 'react'
import Link from 'gatsby-link'

import image1 from '../assets/bird-lt.png';
import image2 from '../assets/bird-sun.png';

import image3 from '../assets/project-MT-mission.png';
import image4 from '../assets/project-MT-site.png';
import image5 from '../assets/project-WB-phone.png';
import image6 from '../assets/project-xmas-card.png';
import image7 from '../assets/project-wapo.png';
import image8 from '../assets/project-satsummit.png';
import image9 from '../assets/project-robot-heads.png';
import image10 from '../assets/project-service-year.png';
import image11 from '../assets/project-baking.png';
import image12 from '../assets/project-cat.png';

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
                <li><a href="#work">Work</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="header--projects section--internal">
      <div className="row">
        <a name="work">
        <h2 className="header--large">My Work</h2>
        <div className="wrapper--projects">
          <div className="wrapper--projects-col wrapper--projects-col1">
            <div className="project">
              <h3 className="header--xsmall project--label">Mariana Tek - Values Illustrations</h3>
              <img src={image3} alt="Mariana Tek Values Illustrations" />
            </div>
            <div className="project">
              <h3 className="header--xsmall project--label">Mariana Tek - Holiday Card</h3>
              <img src={image6} alt="Mariana Tek Holiday Card" />
            </div>
            <div className="project">
              <h3 className="header--xsmall project--label">Development Seed/Mapbox - Satsummit Website</h3>
              <img src={image8} alt="Satsummit Website" />
            </div>
            <div className="project">
              <h3 className="header--xsmall project--label">Personal - Baking Illustration</h3>
              <img src={image11} alt="Baking Illustration" />
            </div>
          </div>
          <div className="wrapper--projects-col wrapper--projects-col2">
            <div className="project">
              <h3 className="header--xsmall project--label">Mariana Tek - Company Website</h3>
              <img src={image4} alt="Mariana Tek Website" />
            </div>
            <div className="project">
              <h3 className="header--xsmall project--label">Washington Post - Election Graphics</h3>
              <img src={image7} alt="WAPO elections" />
            </div>
            <div className="project">
              <h3 className="header--xsmall project--label">Service Year - Company Website</h3>
              <img src={image10} alt="Service Year" />
            </div>
            <div className="project">
              <h3 className="header--xsmall project--label">Sunlight Foundation - Employee Illustrations</h3>
              <img src={image9} alt="Robot Heads" />
            </div>
          </div>
          <div className="wrapper--projects-col wrapper--projects-col3">
            <div className="project">
              <h3 className="header--xsmall project--label">World Bank - Surveying Mobile App</h3>
              <img src={image5} alt="World Bank Mobile App" />
            </div>
            <div className="project">
              <h3 className="header--xsmall project--label">Personal - Cat Illustration</h3>
              <img src={image12} alt="Cat Illustration" />
            </div>
          </div>
        </div>
        </a>
      </div>
    </section>
    <section className="header--about">
      <div className="row">
        <a name="about">
        <span className="object--circle"></span>
        <span>
          <img className="img-bird img-bird1" src={image1} alt="Individual project page screenshots" />
        </span>
        <span>
          <img className="img-bird img-bird2" src={image2} alt="Individual project page screenshots" />
        </span>
        <div className="header--about--content">
          <h2 className="header--large">About me</h2>
          <p>Originally from Michigan, Ali decided to escape the frigid temperatures of the north by going to art school in Savannah, GA. After earning a degree in graphic design from The Savannah College of Art and Design (SCAD - go bees), Ali moved to Washington, D.C., where she currently resides. After working in the industry for a number of years, Ali has been lucky enough to: use her design and user experience knowledge to bring life to client’s ideas, make design and UX more of a focus within the organizations she’s worked for, manage teams of designers and, teach UX to others, in the hope that we can all build more user friendly products. Most importantly, Ali lives to be challenged. She has worked for a number of different organizations from the Government, to non-profits, to advertising agencies, all with the hope of finding the next complex and interesting problem to solve.</p>

          <p>Although trained as a visual designer, Ali learned at a very early stage in her career the importance of UX. Not just that building a great experience, for the user, meant a great product but the value in UX deliverables. Building wireframes or user flows to allow her clients or coworkers to better understand her vision. Doing user testing and interviews to really understand what users want and need. Her mantra is, why guess at design and functionality when you can know what your clients and users want by asking them the right (non-leading) questions.</p>
        </div>
        </a>
      </div>
    </section>
    <section className="header--contact">
      <div className="row">
        <div className="contact--content">
          <a name="contact">
          <h2 className="header--large">Contact Me</h2>
          <p>I’m always looking for new and interesting challenges. Have one or just want to connect? I’d love to hear from you!</p>
          <Link className="button button--dark" to="mailto:alifelski@gmail.com">Reach Out</Link>
          </a>
        </div>
      </div>
    </section>
  </div>
)

export default IndexPage
