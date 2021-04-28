import { modifySend } from "./modifySend";

const regiest_post = (app: any, url: string, fn: Function) => {
  app.post(url, (req: any, rep: any) => {
    return modifySend(() => {
      return Promise.resolve(fn(req.body));
    });
  });
};

// 零 api 方案，具体使用请参考 README.md
// 注册一个单层级对象，转化为若干个 post 路由
export const zeroApi = <T>(app: any, preUrl: string, obj: T) => {
  Object.keys(obj).forEach((k) => {
    regiest_post(app, preUrl + "/" + k, (obj as any)[k]);
  });
};
