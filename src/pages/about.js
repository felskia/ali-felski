import React from 'react'
import Link from 'gatsby-link'

const About = () => (
  <div className="row">
    <div className="about">
      <div className="split split--half">
        <h1 className="header--xxlarge">About Me!</h1>
        <dl>
          <dt>Email me:</dt>
          <dd>alifelski(at)gmail.com</dd>
        </dl>
        <Link className="button" to="/">Download My Resume</Link>
      </div>
      <div className="split split--half">
        <p>Originally from Michigan, Ali decided to escape the frigid temperatures of the north by going to art school in Savannah, GA. After earning a degree in graphic design from The Savannah College of Art and Design (SCAD - go bees), Ali moved to Washington, D.C., where she currently resides. After working in the industry for a number of years, Ali has been lucky enough to: use her design and user experience knowledge to bring life to client’s ideas, make design and UX more of a focus within the organizations she’s worked for, manage teams of designers and, teach UX to others, in the hope that we can all build more user friendly products. Most importantly, Ali lives to be challenged. She has worked for a number of different organizations from the Government, to non-profits, to advertising agencies, all with the hope of finding the next complex and interesting problem to solve.</p>

        <p>Although trained as a visual designer, Ali learned at a very early stage in her career the importance of UX. Not just that building a great experience, for the user, meant a great product but the value in UX deliverables. Building wireframes or user flows to allow her clients or coworkers to better understand her vision. Doing user testing and interviews to really understand what users want and need. Her mantra is, why guess at design and functionality when you can know what your clients and users want by asking them the right (non-leading) questions.</p>
        <div>
          <h2>Random Racts</h2>
          <ul>
            <li>I had 9 dogs (at one time). When I was going to school in Savannah, stray dogs were sadly quite common. The city wasn’t able to keep up with the need and so myself and my neighbors would take in dogs when necessary.</li>
            <li>I’ve broken 10 bones. I like to think of these an unfortunate events instead of me just being clutzy. Thankfully most of them have been small bones.</li>
            <li>Proud midwesterner. I hail from a tiny tiny tiny town, in Michigan, just south of the Mackinaw bridge. Although I’ve lived many years away from the great state, I still cherish the fact that I grew up there and feel that it is very much a part of who I am.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default About
