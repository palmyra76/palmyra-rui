import { IEndPoint } from '../layout/Types';
import { StoreFactory } from '../../main';
import { FormData } from './Definitions';

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
