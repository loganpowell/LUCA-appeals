// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/
// })


/* 
see:  https://github.com/hashicorp/next-mdx-enhanced
 */
const withMdxEnhanced = require('next-mdx-enhanced')


// module.exports = withMDX({
//   pageExtensions: ['js', 'jsx', 'md', 'mdx']
// })

module.exports = withMdxEnhanced({
    // layoutsPath: 'layouts/', //Directory used to resolve page layout when layout key present in front matter. Value is resolved relative to project root.
    // defaultLayout: true,
    // remarkPlugins: [],
    // rehypePlugins: [],
    extendFrontMatter: {
      process: mdxContent => {},
      phase: 'prebuild|loader|both'
    }
  })({
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
})