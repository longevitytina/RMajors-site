// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

// /*
//  * This component is built using `gatsby-image` to automatically serve optimized
//  * images with lazy loading and reduced file sizes. The image is loaded using a
//  * `useStaticQuery`, which allows us to load the image from directly within this
//  * component, rather than having to pass the image data down from pages.
//  *
//  * For more information, see the docs:
//  * - `gatsby-image`: https://gatsby.dev/gatsby-image
//  * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
//  */

// const Image = () => {
//   const data = useStaticQuery(graphql`
//   query {
//     profileImage: file(relativePath: { eq: "filler2.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 600) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     `)

//   return <Img fluid={data.profileImage.childImageSharp.fluid} />
// }

// // const data = useStaticQuery(graphql`
// //   query {
// //     allFile(filter: { extension: { regex: "/(jpg)|(png)|(jpeg)/" } }) {
// //       edges {
// //         node {
// //           base
// //           childImageSharp {
// //             fluid {
// //               ...GatsbyImageSharpFluid
// //             }
// //           }
// //         }
// //       }
// //     }
// //   }
// // `)
// // console.log(data)
// // return (
// //   <div>
// //     {data.allFile.edges.map(image => (
// //       <Img
// //         fluid={image.node.childImageSharp.fluid}
// //         alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
// //       />
// //     ))}
// //   </div>
// // )
// // }

// export default Image
