import React from 'react'
import Link from 'gatsby-link'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="footer--content">
            <h3 className="header--large withDescription">Reach Out!</h3>
            <p className="body-copy--lg">I’m always looking for new and interesting challenges. Have one or just want to connect? I’d love to hear from you!</p>
            <Link className="button button--dark" to="/page-2/">Contact Me!</Link>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer
