import path from "path";

let _env = {} as any;

try {
  let env_path = path.resolve(__dirname, "./env.js");

  _env = require(env_path);
} catch (err) {
  console.log("[Error]: ./env.js is error");
}

// 获取 static/env.js 的对象
export const env = _env;
