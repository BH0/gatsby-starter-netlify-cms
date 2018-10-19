import React from 'react'; 
import PropTypes from 'prop-types'; 
import Helmet from 'react-helmet'; 


import Header from '../components/header'; 
import Searchbar from '../components/searchbar'; 
import Navbar from '../components/navbar'; 

import './index.css'; 
require("prismjs/themes/prism-solarizedlight.css"); 

const Layout = ({ children, data }) => (
  <div class="mobile">
    <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */} 
      <Header /> 
      <Searchbar /> 
      <Navbar /> 
      <div className="mobile articles-container">   
          {children()} 
      </div> 
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
