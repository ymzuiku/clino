interface ENV {
  mongo_url: string;
}

import path from "path";

let _env = {} as any;

try {
  let env_path = path.resolve(__dirname, "./env.js");

  _env = require(env_path);
} catch (err) {}

export const env: ENV = _env;
