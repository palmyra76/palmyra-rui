
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
    formListener?: IFormListener
}

interface IPalmyraNewFormOutput {
    data: FormData,
    saveData: () => any,
    formRef: MutableRefObject<any>
}

type IusePalmyraNewForm = (props: IPalmyraNewFormInput) => IPalmyraNewFormOutput;

const usePalmyraNewForm: IusePalmyraNewForm = (props: IPalmyraNewFormInput): IPalmyraNewFormOutput => {
    const storeFactory = props.storeFactory;
    const [data, setData] = useState<any>(null);
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

    const saveData = (): any => {
        if (formRef && formRef.current) {
            const idProperty = props.idKey;
            var endPoint = props.endPoint
            const formStore = storeFactory.getFormStore({}, endPoint, idProperty);
            const data = formRef.current.getData();
            formStore.post(data).then((d) => {
                setData(d);
                formListener.onSaveSuccess(d);
            }).catch(e => {
                formListener.onSaveFailure(e);
            });
        }
    }

    return { data, saveData, formRef };
}


export { usePalmyraNewForm }
export type { IPalmyraNewFormInput, IPalmyraNewFormOutput }