/* eslint-disable */

import React from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FunctionDoc from "../components/FunctionDoc";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    {data.docs.nodes.map(x => (
      <FunctionDoc {...x} />
    ))}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query DocsQuery {
    docs: allDocumentationJs(filter: { kind: { eq: "function" } }) {
      nodes {
        name
        params {
          name
          description {
            internal {
              content
            }
          }
        }
      }
      totalCount
    }
  }
`
