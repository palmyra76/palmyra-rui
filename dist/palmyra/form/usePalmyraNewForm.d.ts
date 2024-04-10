import { IFormListener } from './interface';
import { FormData, StoreFactory } from '../../main';
import { IEndPoint } from '../layout/Types';
import { MutableRefObject } from 'react';

interface IPalmyraNewFormInput {
    storeFactory: StoreFactory<any>;
    endPoint: IEndPoint;
    idKey?: string;
    formListener?: IFormListener;
    initialData?: any;
}
interface IPalmyraNewFormOutput {
    data: FormData;
    saveData: (data?: any) => Promise<any>;
    formRef: MutableRefObject<any>;
}
type IusePalmyraNewForm = (props: IPalmyraNewFormInput) => IPalmyraNewFormOutput;
declare const usePalmyraNewForm: IusePalmyraNewForm;
export { usePalmyraNewForm };
export type { IPalmyraNewFormInput, IPalmyraNewFormOutput };
