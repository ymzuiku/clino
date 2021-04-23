import path from "path";

let _env = {} as any;

try {
  let env_path = path.resolve(__dirname, "./env.js");

  _env = require(env_path);
} catch (err) {}

// 获取 static/env.js 的对象
export const env = _env;
