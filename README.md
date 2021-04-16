# clino

nodejs server tools

> clino 仅在内部培训后使用

Node 服务往往拆分的很碎，许多重复的代码块在不同的服务中高频使用，clino 就是这些代码块的集合。

由于 clino 是代码块，所有依赖都不默认安装，在实际项目中主动安装。

## zero_api

clino 和 clino-client 提供了 zero_api, 前后端配合使用可以像调用本地方法一样调用服务端接口

### 1.服务端创建 zero api:

```ts
load_zero_apis("/v1", {
  hello_world: async ({ name, age }) => {
    return { code: 200, msg: "ok", data: { hello: "world" } };
  },
  hello2: async ({ name, age }) => {
    return { code: 200, msg: "ok", data: { hello: "two" } };
  },
});
```

### 2.服务端创建 apis.d.ts

在服务端根目录创建 apis.d.ts , apis 对象转化为 type 导出

```ts
import * as apis from "./server/apis";

type APIs = typeof apis;

export { APIs };
```

### 3.客户端使用 zero_api

客户端安装 clino-client:

```sh
npm i --save clino-client
```

客户端创建 apis.ts 文件：

```ts
import { APIs } from "you-self-/apis";
import { zero_api_client } from "clino-client";

const apis = zero_api_client<APIs>("/v1", (err) => {
  console.log("这里做统一的错误处理", err);
});

export { apis };
```
