import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <section className="header--home">
      <div className="row">
        <h1 className="header--xlarge">I love being curious</h1>
      </div>
    </section>
    <section className="section section--centered">
      <div className="row">
        <h2 className="header--xlarge">I can't help wanting to learn</h2>
        <p>I love being creative and constantly learning new things. From redesigning my home to learning about new cultures, I love doing and experiencing it all.</p>
        <Link className="button" to="/page-2/">Learn More</Link>
      </div>
    </section>
    <section>
      <div className="row">
        <ul>
          <li>
            <Link to="/page-2/">

            </Link>
          </li>
        </ul>
      </div>
    </section>

  </div>
)

export default IndexPage
