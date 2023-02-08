import type { Config } from "jest";

const config: Config = {
  verbose: true,
  transformIgnorePatterns: ["/node_modules/(?!(uuid)/)"],
};

export default config;
