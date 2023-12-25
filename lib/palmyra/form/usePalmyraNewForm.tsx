
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { IEndPoint } from "../layout/Types";
import { GetRequest } from "../store/Types";
import { FormData, StoreFactory } from "../../main";
import { IFormListener, NoopFormListener } from "./interface";

interface IPalmyraNewFormInput {
    storeFactory: StoreFactory<any>,
    id?: string,
    endPoint: IEndPoint,
    idKey?: string,
    formListener?: IFormListener,
    initialData?: any
}

interface IPalmyraNewFormOutput {
    data: FormData,
    saveData: (data?: any) => Promise<any>,
    formRef: MutableRefObject<any>
}

type IusePalmyraNewForm = (props: IPalmyraNewFormInput) => IPalmyraNewFormOutput;

const usePalmyraNewForm: IusePalmyraNewForm = (props: IPalmyraNewFormInput): IPalmyraNewFormOutput => {
    const storeFactory = props.storeFactory;
    const [data, setData] = useState<any>(props.initialData == undefined ? null : props.initialData);
    const formRef = useRef<any>(null);
    const idKey = props.idKey || 'id';
    const formListener = props.formListener || NoopFormListener;

    const getEndPoint = (endPoint: IEndPoint, idProperty: string): IEndPoint => {
        if (typeof endPoint == 'string') {
            return endPoint + '/{' + idProperty + '}';
        } else {
            return endPoint;
        }
    }

    useEffect(() => {
        const id = props.id;
        if (id) {
            const idProperty = idKey;
            var endPoint = getEndPoint(props.endPoint, idProperty);
            const formStore = storeFactory.getFormStore({}, endPoint, idProperty);
            var request: GetRequest = {
                options: {
                    [idProperty]: id
                }
            };
            formStore.get(request).then(d => { setData(d) });
        }
    }, [props.id])

    const saveData = (d?: any): Promise<any> => {
        if (d || (formRef && formRef.current)) {
            const idProperty = props.idKey;
            var endPoint = props.endPoint
            const formStore = storeFactory.getFormStore({}, endPoint, idProperty);
            const data = d || formRef.current.getData();
            return formStore.post(data).then((d) => {
                setData(d);
                if (formListener.onSaveSuccess)
                    formListener.onSaveSuccess(d);
                return Promise.resolve(d);
            }).catch(e => {
                if (formListener.onSaveFailure)
                    formListener.onSaveFailure(e);
                return Promise.reject(e);
            });
        } else
            return Promise.reject('invalid data');
    }

    return { data, saveData, formRef };
}


export { usePalmyraNewForm }
export type { IPalmyraNewFormInput, IPalmyraNewFormOutput }