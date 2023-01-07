/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const server = require("./webpack.hotServer");

const WebConfig = async (envVars: any) => {
  const { env } = envVars;

  const config = merge(commonConfig(env), server(env));
  return config;
};
module.exports = WebConfig;
