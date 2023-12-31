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
type IusePalmyraSaveForm = (props: IPalmyraSaveFormInput) => IPalmyraSaveFormOutput;
declare const usePalmyraSaveForm: IusePalmyraSaveForm;
export { usePalmyraSaveForm };
export type { IPalmyraSaveFormInput, IPalmyraSaveFormOutput };
