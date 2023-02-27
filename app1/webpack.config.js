const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const deps = require("./package.json").dependencies;
const { FederatedTypesPlugin } = require("@module-federation/typescript");

const federationConfig = {
  name: "app1",
  filename: "remoteEntry.js",
  exposes: {
    // expose each component
    "./_types/AppOne": "./src/AppOne.tsx",
    "./_types/components/Select": "./src/components/Select.tsx",
  },
  shared: {
    ...deps,
    react: { singleton: true, eager: true, requiredVersion: deps.react },
    "react-dom": {
      singleton: true,
      eager: true,
      requiredVersion: deps["react-dom"],
    },
    "react-router-dom": {
      singleton: true,
      eager: true,
      requiredVersion: deps["react-router-dom"],
    },
  },
};

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  devServer: {
    port: 3001,
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
      federationConfig,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
