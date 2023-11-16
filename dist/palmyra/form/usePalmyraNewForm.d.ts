import { MutableRefObject } from "react";
import { IEndPoint } from "../layout/Types";
import { FormData, StoreFactory } from "../../main";
interface IPalmyraNewFormInput {
    storeFactory: StoreFactory<any>;
    id?: string;
    endPoint: IEndPoint;
    idKey?: string;
}
interface IPalmyraNewFormOutput {
    data: FormData;
    saveData: (data: FormData) => any;
    formRef: MutableRefObject<any>;
}
type IusePalmyraNewForm = (props: IPalmyraNewFormInput) => IPalmyraNewFormOutput;
declare const usePalmyraNewForm: IusePalmyraNewForm;
export { usePalmyraNewForm };
export type { IPalmyraNewFormInput, IPalmyraNewFormOutput };
