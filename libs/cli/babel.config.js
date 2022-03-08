const BABEL_ENV = process.env.BABEL_ENV
const cjs = BABEL_ENV !== undefined && BABEL_ENV === "cjs"

module.exports = {
  plugins: [
    [ "@babel/plugin-syntax-dynamic-import" ],
    [ "dynamic-import-node", { "noInterop": true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }]
  ],
  presets: [
    "@babel/preset-typescript",
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        bugfixes: true,
        modules: cjs ? "commonjs" : false,
        loose: true,
      },
    ],
  ],
}
