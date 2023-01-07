/* eslint-disable @typescript-eslint/no-var-requires */
const ESLintPlugin = require("eslint-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const WebpackServer = (env) => {
  return {
    mode: env === "local" ? "development" : "production",
    devtool: env === "local" ? "cheap-module-source-map" : "source-map",
    devServer: {
      open: true,
      historyApiFallback: true,
      liveReload: true,
      port: 3000,
      client: {
        overlay: false,
      },
    },
    plugins: [
      new ESLintPlugin({
        extensions: ["js", "jsx", "ts", "tsx"],
        fix: true,
        // this is temporary, need to remove once all solve all ts issues
        emitWarning: false,
      }),
      new CleanWebpackPlugin(),
    ],
  };
};
module.exports = WebpackServer;
