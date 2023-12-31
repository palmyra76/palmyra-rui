import { MutableRefObject } from "react";
import { IEndPoint } from "../layout/Types";
import { FormData, StoreFactory } from "../../main";
import { IFormListener } from "./interface";
interface IPalmyraEditFormInput {
    storeFactory: StoreFactory<any>;
    id: string;
    endPoint: IEndPoint;
    idKey?: string;
    formListener?: IFormListener;
}
interface IPalmyraEditFormOutput {
    data: FormData;
    saveData: (data?: any) => Promise<any>;
    formRef: MutableRefObject<any>;
}
type IusePalmyraEditForm = (props: IPalmyraEditFormInput) => IPalmyraEditFormOutput;
declare const usePalmyraEditForm: IusePalmyraEditForm;
export { usePalmyraEditForm };
export type { IPalmyraEditFormInput, IPalmyraEditFormOutput };
