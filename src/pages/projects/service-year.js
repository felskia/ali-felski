import React from 'react'
import Link from 'gatsby-link'

//import sitemap from '../assets/sy-sitemap.jpg';

const SY = () => (
  <div>
    <section className="header--internal header--red">
      <div className="row">
        <h1 className="header--xlarge">Service Year</h1>
        <span>Building a complex system from the ground up.</span>
        <ul className="ali-tags">
          <li>Facilitated Kickoff Meeting</li>
          <li>Competitive Analysis</li>
          <li>Modular Stylesheet</li>
          <li>Wireframes</li>
          <li>User Flows</li>
          <li>Prototypes</li>
          <li>User Testing</li>
        </ul>
      </div>
    </section>
    <section>
      <div className="row">
        <p className="intro--project">Designed to allow young people to find and commit to a yearlong volunteer opportunity as well as a system to track and approve both volunteers and organizations.</p>

        <p>Off of a client provided list of about 50 users stories, I built the infrastructure and vision of what Service Year would look like as a product. I envisioned each piece of funtionaltiy including how:</p>
        <ul className="list--bullet">
          <li>young volunteers to find and apply to opportunities.</li>
          <li>those volunteers are able to track their experience and receive an award for completing their service year.</li>
          <li>non-profits apply to become part of the Service Year system and, once approved, for them to be able to post volunteer opportunities, process, accept and track their volunteers over time.</li>
          <li>the Service Year admins manage the site. Approving or declining requests to join, providing support for their users and seeing how the platform was performing over time.</li>
        </ul>
        <figure>
          <img src="" alt="Ali with gigantic sitemap" width="304" height="228" />
          <figcaption>Ali with gigantic sitemap of the project we were about to undertake. Having a printed version enabled us to discuss the interface more easily as you could see the whole thing at once (while still being able to read the labels).</figcaption>
        </figure>
        <p>Throughout implementation, I also lead rounds of user testing to ensure that what we were building matched users expectations. For Service Year, I tested the product with moderated usability testing, my preferred method. Doing this type of testing allowed me to collect both qualitative and quantitative data, to determine what issues were a priority to fix and also to get a sense for what other features users thought might be valuable.</p>
        <p>More importantly, I didn’t build the infrastructure in a bubble but got buy in from the team, and the client by building a number of UX deliverables, in order to enable our conversations. Having these deliverables, listed at the top of the page, also allowed us to ensure that complex features were worked through early on and that all functionality was accounted for. From doing a functionality analysis (comparison of current design patterns for main functionality across the web) with the team to building a test plan (a write up of the objective and how the test will be carried out), I found ways to involve others during every step of the process to have each team member feel engaged and like a valued member of the team, being able to weigh in.</p>
        <p>Finally, I guided the team, step by step, through the agile design and implementation processes, ensuring that we were keeping our users in mind, adjusting where needed, and communicating to the client our decisions as we worked towards our final product.</p>
        <h2>A User Centered Product</h2>
        <p>Each element that made up the 135 wireframes were carefully thought through, using design patterns along with lessons learned from usability testing. I iterated on and produced a usable and understandable infrastructure that formed the base for design, development and most importantly a great product.</p>
      </div>
    </section>
  </div>
)

export default SY
