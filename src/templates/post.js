import React from 'react'; 
import Helmet from 'react-helmet'; 
import Link from 'gatsby-link'

export default function Template({data}) { 
    const {markdownRemark: post } = data 
    // const post = data.markdownRemark; 
    return ( 
        <div> 
            <Link to="/">Return home</Link> 
            <h2 className="sub-title">{post.frontmatter.title}</h2> 
            <div dangerouslySetInnerHTML={{__html: post.html}} />
        </div> 
    );  
} 

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }

/*
export const postQuery = graphql`
    query BlogPostByPath($path: String!) { 
        markdownRemark(frontmatter: { path: { eq: $path} }) { 
            html 
            frontmatter { 
                path 
                title 
            }
        }
    }
` 
*/