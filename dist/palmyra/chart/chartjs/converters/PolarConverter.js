import { NoopConverter as r } from "./ScaleConverter.js";
import { ArrayScaleConverter as e } from "./base/ArrayScaleConverter.js";
import { KeyValueScaleConverter as o } from "./base/KeyValueScaleConverter.js";
import { ObjectScaleConverter as t } from "./base/ObjectScaleConverter.js";
import { TwoXDimArrayScaleConverter as a } from "./base/TwoXDimArrayScaleConverter.js";
const f = {
  default: e,
  twoXKey: a,
  object: t,
  keyValue: o,
  noop: r
};
export {
  f as default
};
