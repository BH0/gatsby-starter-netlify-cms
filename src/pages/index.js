import React from 'react'; 
import Link from 'gatsby-link'; 

import Navbar from '../components/navbar'; 

const IndexPage = ({data}) => (
  <div className="mobile articles-container"> 
      <h2 className="sub-title">Recent</h2> 
      {data.allMarkdownRemark.edges.map(post => ( 
          <div className="article-container"> 
            <Link className="achnor-tag"  
              key={post.node.id} 
              to={post.node.frontmatter.path}>
                {post.node.frontmatter.title}
              </Link> 
              <p>Author: BH0 | Date: 02-02-2018</p> 
              <p>SUMMARY Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, earum nisi ullam voluptatibus delectus tenetur quae cupiditate recusandae a libero deleniti ea et magnam amet. Fugiat mollitia quasi non illum.</p> 
            </div> 
      ))}
  </div> 
); 

export const pageQuery = graphql`
  query IndexQuery { 
    allMarkdownRemark(
      limit: 4
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true }}}
    ) { 
      edges { 
        node { 
          id
          frontmatter { 
            title 
            path
            published 
            date
          }
        }
      }
    }
  }
`

export default IndexPage
