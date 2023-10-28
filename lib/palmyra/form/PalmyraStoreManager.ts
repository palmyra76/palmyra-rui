import { useContext } from "react";
import { LookupStore } from "../store";
import { FieldDefinition } from "./Definitions";
import { StoreFactoryContext } from "../layout/flexiLayout/FlexiLayoutContext";

const getLookupStore = (fieldDef: FieldDefinition): LookupStore<any> => {
    const storeFactory = useContext(StoreFactoryContext);
    const idAttribute = fieldDef.lookupOptions?.idAttribute || "name";
    return storeFactory.getLookupStore(fieldDef.storeOptions, idAttribute);
}

export { getLookupStore }