import { app } from "./app";
import { modifySend } from "./modifySend";

const regiest_post = (url: string, fn: Function) => {
  app.post(url, (req, rep) => {
    return modifySend(() => {
      return Promise.resolve(fn(req.body));
    });
  });
};

// function flatten(obj: any) {
//   var result = {} as any;
//   function recurse(src: any, prop: any) {
//     var toString = Object.prototype.toString;
//     if (toString.call(src) == "[object Object]") {
//       var isEmpty = true;
//       for (var p in src) {
//         isEmpty = false;
//         recurse(src[p], prop ? prop + "/" + p : p);
//       }
//       if (isEmpty && prop) {
//         result[prop] = {};
//       }
//     } else {
//       result[prop] = src;
//     }
//   }
//   recurse(obj, "");

//   return result;
// }

// 零 api 方案，具体使用请参考 README.md
// 注册一个单层级对象，转化为若干个 post 路由
export const zeroApi = <T>(preUrl: string, obj: T) => {
  Object.keys(obj).forEach((k) => {
    regiest_post(preUrl + "/" + k, (obj as any)[k]);
  });
};
