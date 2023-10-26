import { DataConverterGen } from "../DataConverterFactory";
import { ArrayScaleConverter, KeyValueScaleConverter, NoopConverter, ObjectScaleConverter } from "./ScaleConverter";


const converters: Record<string, DataConverterGen> = {
    "default": ArrayScaleConverter,
    "object": ObjectScaleConverter,
    "keyValue": KeyValueScaleConverter,
    "noop": NoopConverter
}

export default converters;
