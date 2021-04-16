import { MongoClient } from "mongodb";
import { env } from "./env";

export const mgo = new MongoClient(env.mongo_url, {
  useUnifiedTopology: true,
});
