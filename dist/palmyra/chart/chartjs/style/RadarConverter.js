import { ArrayStyleConverterFactory as r } from "./base/ArrayStyleConverterFactory.js";
import { DatasetStyleConverterFactory as o } from "./base/DatasetStyleConverterFactory.js";
import { RandomStyleConverterFactory as t, NoopStyleConverterFactory as e } from "./base/RandomStyleConverterFactory.js";
const n = {
  Array: r,
  Named: o,
  Random: t,
  Noop: e
};
export {
  n as default
};
