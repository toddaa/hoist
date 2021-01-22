import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const renderImage = (file) => {
  return (
    <Img style={{ maxHeight: '200px' }} fluid={file.node.childImageSharp.fluid} />
  )
}

const CardImage = (props) => {
  return (
    <StaticQuery
      query={graphql`
      query {
        images: allFile {
          edges {
            node {
              extension
              relativePath
              childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    `}
      render={(data) => {
        const image = data.images.edges.find(
          image => image.node.relativePath === props.image
        )
        return (renderImage(image))
      }}
    />
  )
}

export default CardImage
