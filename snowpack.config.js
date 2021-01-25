/* eslint-disable no-undef */
// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    "src": "/"
  },
  "plugins": [
    [
      "@snowpack/plugin-build-script",
      {
        "cmd": "postcss",
        "input": [
          ".css"
        ],
        "output": [
          ".css"
        ]
      }
    ],
    "@snowpack/plugin-sass"
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  "optimize": {
    "bundle": true,
    "minify": true,
    "target": 'es2018'
  }
};
