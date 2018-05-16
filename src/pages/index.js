import React from 'react'
import Link from 'gatsby-link'

import image1 from '../assets/wapo-thumb.jpg';
import image2 from '../assets/robotheads-thumb.jpg';
import image3 from '../assets/satsummit-thumb.jpg';
import image4 from '../assets/observe-thumb.jpg';

const IndexPage = () => (
  <div>
    <section className="header--home">
      <div className="row">
        <h1 className="header--xlarge">I love being curious</h1>
      </div>
    </section>
    <section className="section section--centered">
      <div className="row">
        <h2 className="header--xlarge withDescription">I can't help wanting to learn</h2>
        <p className="intro-copy">I love being creative and constantly learning new things. From redesigning my home to learning about new cultures, I love doing and experiencing it all.</p>
        <Link className="button" to="/about/">Learn More</Link>
      </div>
    </section>
    <section>
      <div className="row">
        <ul>
          <li className="project-thumb project-thumb--red project-thumb--lg">
            <img className="img-about1 project-thumb--center" src={image1} style={{width: "92%", bottom: "2em"}} alt="Individual project page screenshots" />
          </li>
          <li className="project-thumb project-thumb--orange project-thumb--sm">
            <img className="img-about1 project-thumb--center project-thumb--center-vert" src={image2} style={{width: "83%"}} alt="Individual project page screenshots" />
          </li>
          <li className="project-thumb project-thumb--blue project-thumb--lg">
            <img className="img-about1" src={image3} style={{width: "90%", bottom: "0", left: "0"}} alt="Individual project page screenshots" />
          </li>
          <li className="project-thumb project-thumb--green project-thumb--tall">
            <img className="img-about1 project-thumb--center project-thumb--center-vert" src={image4} style={{width: "70%"}} alt="Individual project page screenshots" />
          </li>
        </ul>
      </div>
    </section>

  </div>
)

export default IndexPage
