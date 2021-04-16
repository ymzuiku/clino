import { MongoClient } from "mongodb";
import { env } from "./env";

export const mgo = new MongoClient(env.mongo_url, {
  useUnifiedTopology: true,
});
export const gewuDb = () => mgo.db("gewu_doc");
export const userColl = () => gewuDb().collection("user");
export const simMessageColl = () => gewuDb().collection("sim_message");
