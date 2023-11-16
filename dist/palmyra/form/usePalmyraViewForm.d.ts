import { IEndPoint } from "../layout/Types";
import { FormData, StoreFactory } from "../../main";
interface IPalmyraViewFormInput {
    storeFactory: StoreFactory<any>;
    id: string;
    endPoint: IEndPoint;
    idKey?: string;
}
interface IPalmyraViewFormOutput {
    data: FormData;
}
type IusePalmyraViewForm = (props: IPalmyraViewFormInput) => IPalmyraViewFormOutput;
declare const usePalmyraViewForm: IusePalmyraViewForm;
export { usePalmyraViewForm };
export type { IPalmyraViewFormInput, IPalmyraViewFormOutput };
