export enum SDK {
  DOT_NET = "dotNet",
  GO = "go",
  PYTHON = "python",
  REACT = "react",
  JAVASCRIPT = "javascript",
  TERRAFORM = "terraform",
  NODE = "node",
  ANDROID = "android",
  IOS = "ios",
  Java = "java",
}

export const isValidSdk = (val: unknown): val is SDK =>
  Object.values(SDK).includes(val as SDK);
