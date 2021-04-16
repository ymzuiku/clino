import fastify from "fastify";

export const app = fastify({ logger: { level: "info" } });
