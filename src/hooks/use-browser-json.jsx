import { graphql, useStaticQuery } from "gatsby"

export const useBrowserJson = () => {
  const data = useStaticQuery(graphql`
    query Browsers {
      allJson(sort: {name: ASC}) {
        edges {
          node {
            name
            instructions {
              linux {
                keyboard
                mouse
              }
              mac {
                keyboard
                mouse
              }
              windows {
                keyboard
                mouse
              }
            }
          }
        }
      }
    }
  `)

  return data.allJson.edges
}
