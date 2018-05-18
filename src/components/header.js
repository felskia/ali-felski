import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <header>
    <div className="row">
      <div className="block--title">
        <h1><Link to="/">
          <span>Ali</span>
          <span>Felski</span>
          </Link>
        </h1>
        <span className="block--title--subtitle">UX & visual designer, cook, illustrator, teacher</span>
      </div>
      <nav>
        <ul>
          <li><Link to="/about/">About</Link></li>
          <li><Link to="/projects/">Projects</Link></li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
