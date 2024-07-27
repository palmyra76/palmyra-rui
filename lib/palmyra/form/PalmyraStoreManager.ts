import { useContext } from "react";
import { LookupStore } from "@palmyralabs/palmyra-wire";
import { ILookupOptions } from "./Definitions";
import { StoreFactoryContext } from "../layout/flexiLayout/FlexiLayoutContext";
import { mergeDeep } from "../utils";

const getLookupStore = (fieldDef: ILookupOptions): LookupStore<any> => {
    const storeFactory = useContext(StoreFactoryContext);
    const idAttribute = fieldDef.lookupOptions?.idAttribute || "name";
    var options: any = {};
    mergeDeep(options, fieldDef.storeOptions);
    return storeFactory.getLookupStore(options, fieldDef.storeOptions.endPoint, idAttribute);
}

export { getLookupStore }