export const cache = new Map();

// 捕获函数的返回值类型，并且仅执行一次函数
export function runonce<T>(fn: () => T): T {
  if (!cache.get(fn)) {
    cache.set(fn, fn());
  }
  return cache.get(fn);
}
