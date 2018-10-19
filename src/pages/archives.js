import React from 'react'
import Link from 'gatsby-link'

const ArchivesPage  = ({data}) => (
  <div className="mobile articles-container"> 
    <h2 className="sub-title">Archives</h2> {/* Archived Blog Posts */}
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
) 

export const pageQuery = graphql`
  query ArchivesQuery { 
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
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

export default ArchivesPage
