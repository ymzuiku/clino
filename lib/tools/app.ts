import fastify from "fastify";

// 一个 fastlify 实例
export const app = fastify({ logger: { level: "info" } });
