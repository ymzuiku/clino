import { app } from "./app";
import { modify_send } from "./modify_send";

export const zero_api = (url: string, fn: Function) => {
  app.post(url, (req, rep) => {
    return modify_send(async () => {
      return Promise.resolve(fn(req.body));
    });
  });
};

export const load_zero_apis = <T>(obj: T) => {
  Object.keys(obj).forEach((k) => {
    zero_api(load_zero_apis.preUrl + "/" + k, obj[k]);
  });
};

load_zero_apis.preUrl = "/v1";
