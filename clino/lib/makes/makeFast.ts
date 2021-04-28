import fastify from "fastify";

// 创建 一个 fastlify 实例
export const makeFast = () => fastify({ logger: { level: "warn" } });
