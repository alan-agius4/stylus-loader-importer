module.exports = {
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.css/i,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.styl/i,
        use: [
          "style-loader",
          "css-loader",
          "stylus-loader",
        ],
      },
    ],
  },
};