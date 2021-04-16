export const resbody = async (
  fn: Function,
  modifyError?: (err: string) => string
) => {
  try {
    const out = await Promise.resolve(fn());
    if (typeof out === "string") {
      return { code: 200, msg: out };
    }
    return { code: 200, ...out };
  } catch (err) {
    if (typeof err !== "string") {
      err = err.toString();
    }

    if (modifyError) {
      err = modifyError(err);
    }

    // 若以 [ok] 开头，将错误转化为msg
    if (/^\[ok\]/.test(err)) {
      return { code: 200, msg: (err as string).replace("[ok]", "").trim() };
    }

    // 若以 [json] 开头，将内容转化为返回对象
    if (/^\[json\]/.test(err)) {
      try {
        const str = (err as string).replace("[json]", "").trim();
        const data = JSON.parse(str);
        return { code: 200, ...data };
      } catch (err) {
        return { code: 500, err: "错误对象 [json] 转化失败" };
      }
    }

    return { code: 400, err: err };
  }
};
