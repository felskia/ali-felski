import React from 'react'
import Link from 'gatsby-link'

const Observe = () => (
  <div>
    <section className="header--internal header--red header--internal--sy">
      <div className="row">
        <div className="header--internal--components">
          <h1 className="header--xlarge withDescription">Service Year</h1>
          <span className="intro--project">Building a complex system from the ground up.</span>
          <ul className="ali-tags">
            <li>Facilitated Kickoff Meeting</li>
            <li>Competitive Analysis</li>
            <li>User Interviews</li>
            <li>User Flows</li>
            <li>Wireframes</li>
            <li>Prototype</li>
            <li>User Testing</li>
            <li>Modular Stylesheet</li>
          </ul>
        </div>
      </div>
    </section>
    <section className="body--internal">
      <div className="row">
        <div className="body--compressed-width">
          <p className="intro--project">Observe is a mobile app that allows it’s users, often humanitarian workers, to quickly and easily collect survey data on geographic points. Working with the world World Bank, we identified a need for a product that was: open source, map based, and would work offline. Also, the most important requirement was that the app be user friendly. Many of the competitor survey apps, are clunky and confusing. Users often get lost in long lists of questions or form pages as a result of sub-par navigation.</p>

          <p>Off of a client provided list of about 50 users stories, I built the infrastructure and vision of what Service Year would look like as a product. I envisioned each piece of funtionaltiy including how:</p>
          <ul className="list--bullet">
            <li>young volunteers to find and apply to opportunities.</li>
            <li>those volunteers are able to track their experience and receive an award for completing their service year.</li>
            <li>non-profits apply to become part of the Service Year system and, once approved, for them to be able to post volunteer opportunities, process, accept and track their volunteers over time.</li>
            <li>the Service Year admins manage the site. Approving or declining requests to join, providing support for their users and seeing how the platform was performing over time.</li>
          </ul>
        </div>
        <figure className="figure--left clearfix">
          <img src={sitemap} alt="Ali with gigantic sitemap" width="70%" />
          <figcaption>Ali with gigantic sitemap of the project we were about to undertake. Having a printed version enabled us to discuss the interface more easily as you could see the whole thing at once (while still being able to read the labels).</figcaption>
        </figure>
        <div className="body--compressed-width">
          <p>Throughout implementation, I also lead rounds of user testing to ensure that what we were building matched users expectations. For Service Year, I tested the product with moderated usability testing, my preferred method. Doing this type of testing allowed me to collect both qualitative and quantitative data, to determine what issues were a priority to fix and also to get a sense for what other features users thought might be valuable.</p>
        </div>
        <div className="body--compressed-width">
          <p>More importantly, I didn’t build the infrastructure in a bubble but got buy in from the team, and the client by building a number of UX deliverables, in order to enable our conversations. Having these deliverables, listed at the top of the page, also allowed us to ensure that complex features were worked through early on and that all functionality was accounted for. From doing a functionality analysis (comparison of current design patterns for main functionality across the web) with the team to building a test plan (a write up of the objective and how the test will be carried out), I found ways to involve others during every step of the process to have each team member feel engaged and like a valued member of the team, being able to weigh in.</p>

          <p>Finally, I guided the team, step by step, through the agile design and implementation processes, ensuring that we were keeping our users in mind, adjusting where needed, and communicating to the client our decisions as we worked towards our final product.</p>
          <h2 className="header--large">A User Centered Product</h2>
          <p>Each element that made up the 135 wireframes were carefully thought through, using design patterns along with lessons learned from usability testing. I iterated on and produced a usable and understandable infrastructure that formed the base for design, development and most importantly a great product.</p>
        </div>
      </div>
    </section>
  </div>
)

export default Observe
