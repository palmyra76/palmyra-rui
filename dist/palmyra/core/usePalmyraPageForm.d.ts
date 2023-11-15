/// <reference types="react" />
import { IEndPoint } from "../layout/Types";
import { StoreFactory } from "../../main";
interface IPalmyraFormInput {
    storeFactory: StoreFactory<any>;
    pageName: string;
    id: string;
    endPoint: IEndPoint;
    idKey?: string;
}
declare const usePalmyraPageForm: (props: IPalmyraFormInput) => {
    data: any;
    saveData: () => any;
    formRef: import("react").MutableRefObject<any>;
};
export { usePalmyraPageForm };
export type { IPalmyraFormInput };
