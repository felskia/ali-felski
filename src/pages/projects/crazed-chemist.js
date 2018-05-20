import React from 'react'
import Link from 'gatsby-link'

import chemist from '../../assets/chemist.jpg';

const Chemist = () => (
  <section className="header--internal header--internal--white">
    <div className="row">
      <h1 className="header--xlarge withDescription">Crazed Chemist by Night</h1>
      <span className="intro--project">Personal Illustration</span>
      <ul className="ali-tags">
        <li>Illustration</li>
      </ul>
      <img className="" src={chemist} style={{width: "83%"}} alt="Illustrations of people as robots" />
    </div>
  </section>
)

export default Chemist
