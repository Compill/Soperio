const nrwlConfig = require("@nrwl/react/plugins/webpack.js"); // require the main @nrwl/react/plugins/webpack configuration function.

module.exports = (config, context) =>
{
  nrwlConfig(config); // first call it so that it @nrwl/react plugin adds its configs,
  console.log("HELLOOOOOOOOOOOOOOOOOOOO")

  console.log({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        "react/jsx-dev-runtime": "jsx",
        "react/jsx-runtime": "jsx"
      }
    },
  })
  // then override your config.
  return {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        "react/jsx-dev-runtime": "react/jsx-dev-runtime",
        "react/jsx-runtime": "react/jsx-runtime"
      }
    },
  };
};


// module.exports = (config, context) =>
// {
//   return {
//     ...config,
//     resolve: {
//       ...config.resolve,
//       alias: {
//         ...config.resolve.alias,
//         "react/jsx-dev-runtime": "react/jsx-dev-runtime",
//         "react/jsx-runtime": "react/jsx-runtime"
//       }
//     },
//   };
// };
