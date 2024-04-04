import { DataConverterGen } from "../DataConverterFactory";
import { NoopConverter } from "./ScaleConverter";
import { ArrayScaleConverter } from "./base/ArrayScaleConverter";
import { KeyValueScaleConverter } from "./base/KeyValueScaleConverter";
import { ObjectScaleConverter } from "./base/ObjectScaleConverter";
import { TwoXDimArrayScaleConverter } from "./base/TwoXDimArrayScaleConverter";


const converters: Record<string, DataConverterGen> = {
    "default": ArrayScaleConverter,
    "twoXKey": TwoXDimArrayScaleConverter,
    "object": ObjectScaleConverter,
    "keyValue": KeyValueScaleConverter,
    "noop": NoopConverter
}

export default converters;

