import { useContext } from "react";
import { LookupStore } from "../store";
import { FieldDefinition } from "./Definitions";
import { StoreFactoryContext } from "../layout/flexiLayout/FlexiLayoutContext";
import { mergeDeep } from "../utils";

const getLookupStore = (fieldDef: FieldDefinition): LookupStore<any> => {
    const storeFactory = useContext(StoreFactoryContext);
    const idAttribute = fieldDef.lookupOptions?.idAttribute || "name";
    var options: any = {};
    mergeDeep(options, fieldDef.storeOptions);
    return storeFactory.getLookupStore(options, fieldDef.storeOptions.endPoint, idAttribute);
}

export { getLookupStore }