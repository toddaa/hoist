import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Card from './Card'

// import './Cards.scss'

const Cards = () => {
  const data = useStaticQuery(graphql`
  query {
    allDataJson(
      sort: { order: ASC, fields: [title] }
    ) {
      edges {
        node {
          text
          title
          image
          id
        }
      }
    }
  }
  `)

  // console.log(data.allDataJson.edges)
  return (
    <div className='cards'>
      {data.allDataJson.edges.map((f, i) => <Card key={i} {...f.node} />)}
    </div>
  )
}

export default Cards
