import React from 'react'
import Link from 'gatsby-link'

import kiss from '../../assets/kiss.jpg';

const Kiss = () => (
  <section className="header--internal header--internal--white">
    <div className="row">
      <h1 className="header--xlarge withDescription">Kiss</h1>
      <span className="intro--project">Fun side project.</span>
      <ul className="ali-tags">
        <li>Illustration</li>
      </ul>
      <img className="" src={kiss} style={{width: "53%"}} alt="Illustrations of people as robots" />
    </div>
  </section>
)

export default Kiss
