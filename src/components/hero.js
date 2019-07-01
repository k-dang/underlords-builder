import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Hero = props => {
  const data = useStaticQuery(
    graphql`
      query {
        images: allFile(
          filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }
        ) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <div style={{
      padding: `8px 8px 0 0`,
    }}>
      <Img
        fluid={
          data.images.edges.find(image => image.node.relativePath === props.src)
            .node.childImageSharp.fluid
        }
      />
    </div>
  )
}

Hero.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string.isRequired,
}

export default Hero
