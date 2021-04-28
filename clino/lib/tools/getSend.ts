import { modifySend } from "./modifySend";

export const getSend = (fn: any) => {
  return (req: any, rep: any) => {
    return modifySend(() => {
      return Promise.resolve(fn(req.query));
    });
  };
};
