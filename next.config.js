const withMdxEnhanced = require("next-mdx-enhanced");
const rehypePrism = require("@mapbox/rehype-prism");

const transpileModules = require('next-transpile-modules')(['@mbank-design']); // pass the modules you would like to see transpiled

module.exports = transpileModules(withMdxEnhanced({
  layoutPath: "src/layouts",
  defaultLayout: true,
  rehypePlugins: [rehypePrism],
})({
  pageExtensions: ["mdx", "tsx"],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: "json",
          use: "yaml-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
      ]
    );
    return config;
  },
}));
