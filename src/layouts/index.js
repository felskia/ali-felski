import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/index.scss'

import apple from '../assets/meta/apple-touch-icon.png';
import favLg from '../assets/meta/favicon-32x32.png';
import favSm from '../assets/meta/favicon-16x16.png';
import safari from '../assets/meta/safari-pinned-tab.svg';

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
      <title>Ali Felski</title>
      <meta name="description" content="Ali Felski's Portfolio" />
      <meta name="keywords" content="Design, UX, User Experience, Washington, DC, Ali, Felski, Ali Felski" />
      <link rel="apple-touch-icon" sizes="180x180" href={apple}/>
      <link rel="icon" type="image/png" sizes="32x32" href={favLg}/>
      <link rel="icon" type="image/png" sizes="16x16" href={favSm}/>
      <link rel="mask-icon" href={safari} color="#f65a5a"/>
      <meta name="msapplication-TileColor" content="#b91d47"/>
      <meta name="theme-color" content="#ffffff"/>
    </Helmet>
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
