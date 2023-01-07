/* eslint-disable @typescript-eslint/no-var-requires */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { DefinePlugin } = require("webpack");

const Common = (env: string): any => {
  let publicPath = "/";
  if (env === "dev") {
    publicPath = "/";
  } else if (env === "prod") {
  } else if (env === "local") {
    publicPath = "/";
  }
  const envVar = {
    NODE_ENV: env === "local" ? "development" : "production",
    REACT_APP_ENV: env,
  };
  return {
    context: process.cwd(),
    entry: path.resolve(__dirname, "..", "index.tsx"),
    resolve: {
      extensions: [".tsx", ".ts", ".js", "jsx"],
      symlinks: false,
      alias: {
        "components": path.resolve(__dirname, "src/components"),
        "container": path.resolve(__dirname, "src/container"),

      }
    },
    module: {
      rules: [
        {
          // Test for all *.ts(x) files,
          // but exclude *.test.ts(x) and *.spec.ts(x) files
          // from the TypeScript loader with a negative look back.
          test: /\.(ts|js|jsx|tsx)$/,
          loader: "ts-loader",
          exclude: /node_modules/,
          options: {
            transpileOnly: true, // disable type checker - we will use it in fork-ts-checker-webpack-plugin (ForkTsCheckerWebpackPlugin)
          },
        },
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
        {
          test: /\.(css|scss)$/,
          use: [
            {
              loader:
                env === "local" ? "style-loader" : MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader",
              options: {
                url: true,
              },
            },

            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(woff(2))$/,
          type: "asset", // <-- Assets module - asset
          parser: {
            dataUrlCondition: {
              maxSize: 8 * 1024, // 8kb
            },
          },
          generator: {
            //If emitting file, the file path is
            filename: "fonts/[name][ext][query]",
          },
        },
        {
          test: /\.(svg)$/,
          use: [
            {
              loader: "@svgr/webpack",
            },
            {
              loader: "url-loader",
            },
          ],
        },
        {
          test: /\.png/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },

        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
      new DefinePlugin({
        "process.env": JSON.stringify(envVar),
      }),
      new CaseSensitivePathsPlugin(),
    ].concat(
      ["index.html", "../404.html"].map(function (htmlFile) {
        return new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "..", "public/index.html"),
          filename: htmlFile,
          manifest: path.resolve(__dirname, "..", "public/manifest.json"),
          builtTime: +new Date(),
        });
      }),
      new ForkTsCheckerWebpackPlugin({})
    ),
    externals: {
      packageName: [
        //package which we do not want in bundle
      ],
    },
    stats: "errors-only",
    output: {
      path: path.resolve(__dirname, "..", "build"),
      filename: "bundle.js",
      publicPath,
      chunkFilename: "[id].[fullhash:8].js",
    },
  };
};
module.exports = Common;
