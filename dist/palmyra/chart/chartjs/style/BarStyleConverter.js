import { ArrayStyleConverterFactory as r } from "./base/ArrayStyleConverterFactory.js";
import { BarNamedStyleConverterFactory as o } from "./base/BarNamedStyleConverterFactory.js";
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
