import { MongoClient, TransactionOptions } from "mongodb";
import { env } from "./env";

// 根据 env.mongo_url 创建 mgo client
export const mgo = new MongoClient(env.mongo_url, {
  useUnifiedTopology: true,
});

export interface SessionTrans extends TransactionOptions {
  client: MongoClient;
}

export const mgoSession = ({ client, ...options }: SessionTrans) => {
  const session = client.startSession();
  session.startTransaction({
    readConcern: { level: "snapshot" },
    writeConcern: { w: "majority", wtimeout: 5000, j: true },
    readPreference: "primary",
    ...options,
  });
  return session;
};
