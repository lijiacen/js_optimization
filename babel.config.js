module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
        targets: {
          browsers: [">0.25%"]
        },
        useBuiltIns: "usage",
        bugfixes: true,
        corejs: 2
      }
    ],
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-runtime"
  ]
};
