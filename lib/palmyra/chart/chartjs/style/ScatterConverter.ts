import { IStyleConverterFactory, StyleType } from "../..";
import { NamedStyleConverterFactory } from "./base/NamedStyleConverterFactory";
import { NoopStyleConverterFactory, RandomStyleConverterFactory } from "./base/RandomStyleConverterFactory";
import { ScatterArrayStyleConverterFactory } from "./base/ScatterArrayStyleConverterFactory";


const converters: Partial<Record<StyleType, IStyleConverterFactory>> = {
    "Array": ScatterArrayStyleConverterFactory,
    "Named": NamedStyleConverterFactory,
    "Random": RandomStyleConverterFactory,
    "Noop": NoopStyleConverterFactory
}

export default converters;