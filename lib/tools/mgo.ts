import { MongoClient } from "mongodb";
import { env } from "./env";

// 根据 env.mongo_url 创建 mgo client
export const mgo = new MongoClient(env.mongo_url, {
  useUnifiedTopology: true,
});
