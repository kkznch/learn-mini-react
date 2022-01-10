module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          chrome: "67",
        },
        useBuiltIns: "usage",
        corejs: "3.6.5",
      },
    ],
  ],
}
