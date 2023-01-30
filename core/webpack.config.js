const { FederatedTypesPlugin } = require("@module-federation/typescript");
const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  output: {
    publicPath: "auto",
  },
  devServer: {
    port: 3003,
    open: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new FederatedTypesPlugin({
      federationConfig: {
        name: "core",
        filename: "remoteEntry.js",
        library: { type: "global", name: "core" },
        exposes: {
          "./_types": "./src/index.ts",
        },
        shared: {
          react: { singleton: true },
        },
      },
    }),
  ],
};
