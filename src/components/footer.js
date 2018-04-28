import React from 'react'
import Link from 'gatsby-link'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="row">
          <h3 className="header--large">Reach Out</h3>
          <p>I’m always looking for new and interesting challenges. Have one or just want to connect? I’d love to hear from you!</p>
          <Link className="button button--dark" to="/page-2/">Contact Me!</Link>
        </div>
      </footer>
    );
  }
}

export default Footer
