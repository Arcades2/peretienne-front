/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  future: {
    v2_routeConvention: true,
  },
  serverDependenciesToBundle: [
    /^rehype.*/,
    /^remark.*/,
    /^unified.*/,
    /^unist.*/,
    /^hast.*/,
    /^bail.*/,
    /^trough.*/,
    /^mdast.*/,
    /^micromark.*/,
    /^decode.*/,
    /^character.*/,
    /^property.*/,
    /^space.*/,
    /^trim-lines.*/,
    /^lowlight.*/,
    /^fault.*/,
    /^comma.*/,
    /^react-markdown$/,
    /^vfile.*/,
    /^axios.*/,
    /^is-plain-obj.*/,
    /^html-void-elements.*/,
    /^web-namespaces.*/,
    /^zwitch.*/,
  ],
};
