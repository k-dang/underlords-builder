import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Builder from "../components/builder"
import { graphql } from "gatsby"
import { classes } from "../components/data"

export default ({ data }) => {
  const structured = new Map()
  Object.keys(classes).forEach(key => {
    structured.set(
      key,
      data.allHeroesJson.edges.filter(({ node }) => node.class.includes(key))
    )
  })

  return (
    <Layout>
      <SEO title="Home" />
      <Builder allHeroes={structured}></Builder>
    </Layout>
  )
}

export const query = graphql`
  query {
    allHeroesJson {
      edges {
        node {
          id
          avatar
          class
          name
        }
      }
    }
  }
`
