module.exports = function (api) {
  api.cache(true);

  // The order of the presets matters
  const presets = ['next/babel'];

  const plugins = [['babel-plugin-styled-components', { ssr: true, displayName: false }]];

  return {
    presets,
    plugins,
    sourceType: 'unambiguous',
    comments: false,
  };
};
