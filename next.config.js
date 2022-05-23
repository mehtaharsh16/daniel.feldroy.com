// // next.config.js
// const withMDX = require("@next/mdx")({
//   extension: /\.mdx$/,
// });
// module.exports = withMDX({
//   pageExtensions: ["js", "jsx", "mdx"],
//   swcMinify: true,
// });

const withMarkdoc = require("@markdoc/next.js");

module.exports = withMarkdoc(/* options */)({
  pageExtensions: ["js", "jsx", "md", "mdx"],
});
