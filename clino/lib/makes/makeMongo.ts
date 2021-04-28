import { MongoClient, TransactionOptions } from "mongodb";
import { env } from "../tools/env";

// 根据 env.mongo_url 创建 mgo client
export const makeMongo = () => {
  return new MongoClient(env.mongo_url, {
    useUnifiedTopology: true,
  });
};

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
