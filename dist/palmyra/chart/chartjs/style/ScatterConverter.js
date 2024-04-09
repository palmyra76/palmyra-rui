import { NamedStyleConverterFactory as r } from "./base/NamedStyleConverterFactory.js";
import { RandomStyleConverterFactory as o, NoopStyleConverterFactory as t } from "./base/RandomStyleConverterFactory.js";
import { ScatterArrayStyleConverterFactory as e } from "./base/ScatterArrayStyleConverterFactory.js";
const n = {
  Array: e,
  Named: r,
  Random: o,
  Noop: t
};
export {
  n as default
};
