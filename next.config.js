const withMarkdoc = require("@markdoc/next.js");

module.exports = withMarkdoc({ schemaPath: "markdoc/" })({
  pageExtensions: ["js", "jsx", "mdoc"],
});
