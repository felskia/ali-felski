import React from 'react'
import Link from 'gatsby-link'

import image1 from '../assets/logo.png';

const IndexPage = () => (
  <div>
    <section className="clearfix">
      <div className="header--home">
        <div className="row">
          <div className="header-content-wrapper">
            <img className="logo" src={image1} alt="Ali Felski Design" />
            <h1 className="header--xlarge">Design, UX, Illustration & Design Direction</h1>
            <span className="callout">Creating highly usable experiences for companies large and small.</span>
            <a className="button button-group" href="mailto:alifelski@gmail.com">Say Hello!</a>
            <a className="button" target="_blank" href="https://www.linkedin.com/in/alexandra-felski-6626464/">Resume</a>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default IndexPage
