const process = (window as any).process;

export const isDev =
  process && process.env && process.env.NODE_ENV === "development";
