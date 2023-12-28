import { MutableRefObject } from "react";
import { IEndPoint } from "../layout/Types";
import { FormData, StoreFactory } from "../../main";
import { IFormListener } from "./interface";
interface IPalmyraSaveFormInput {
    storeFactory: StoreFactory<any>;
    id: string;
    endPoint: IEndPoint;
    idKey?: string;
    formListener?: IFormListener;
}
interface IPalmyraSaveFormOutput {
    data: FormData;
    saveData: (data?: any) => Promise<any>;
    formRef: MutableRefObject<any>;
}
type IusePalmyraEditForm = (props: IPalmyraSaveFormInput) => IPalmyraSaveFormOutput;
declare const usePalmyraEditForm: IusePalmyraEditForm;
export { usePalmyraEditForm };
export type { IPalmyraSaveFormInput, IPalmyraSaveFormOutput };
