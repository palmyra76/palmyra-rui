import { MutableRefObject } from "react";
import { IEndPoint } from "../layout/Types";
import { FormData, StoreFactory } from "../../main";
import { IFormListener } from "./interface";
interface IPalmyraNewFormInput {
    storeFactory: StoreFactory<any>;
    id?: string;
    endPoint: IEndPoint;
    idKey?: string;
    formListener?: IFormListener;
    initialData?: any;
}
interface IPalmyraNewFormOutput {
    data: FormData;
    saveData: (data?: any) => any;
    formRef: MutableRefObject<any>;
}
type IusePalmyraNewForm = (props: IPalmyraNewFormInput) => IPalmyraNewFormOutput;
declare const usePalmyraNewForm: IusePalmyraNewForm;
export { usePalmyraNewForm };
export type { IPalmyraNewFormInput, IPalmyraNewFormOutput };
