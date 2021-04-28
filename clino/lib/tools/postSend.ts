import { modifySend } from "./modifySend";

export const postSend = (fn: any) => {
  return (req: any, rep: any) => {
    modifySend(() => {
      return Promise.resolve(fn(req.body));
    });
  };
};
