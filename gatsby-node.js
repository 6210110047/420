// const { Console } = require('console')
// const { graphql } = require('gatsby')
// const { resolve } = require('path')


// exports.createPages = async ({ graphql , actions }) => {
//     const {data , errors } = await graphql (`
//             query{
//                 allMarkdownRemark{
//                     nodes{
//                         id
//                         frontmatter{
//                             title
//                             path
//                         }
//                     }
//                 }
//             }
//     `)
    
//     if(errors) return Promise.reject(errors)
//     allMarkdownRemark.nodes.forEach(({ id ,frontmatter }) =>  {
//         actions.createPage({
//             path: frontmatter.path,
//             component: resolve('src', 'templates' , 'blog.jsx'),
//             context :{
//                 id
//             }
//         })
//     })
//   //  console.log(allMarkdownRemark.nodes)  
// }
