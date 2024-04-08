import { IFormListener } from './interface';
import { FormData, StoreFactory } from '../../main';
import { IEndPoint } from '../layout/Types';
import { MutableRefObject } from 'react';

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
