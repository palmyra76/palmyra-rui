
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { IEndPoint } from "../layout/Types";
import { GetRequest } from "../store/Types";
import { FormData, StoreFactory } from "../../main";

interface IPalmyraEditFormInput {
    storeFactory: StoreFactory<any>,
    id: string,
    endPoint: IEndPoint,
    idKey?: string
}

interface IPalmyraEditFormOutput {
    data: FormData,
    saveData: () => any,
    formRef: MutableRefObject<any>
}

type IusePalmyraEditForm = (props: IPalmyraEditFormInput) => IPalmyraEditFormOutput;

const usePalmyraEditForm: IusePalmyraEditForm = (props: IPalmyraEditFormInput): IPalmyraEditFormOutput => {
    const storeFactory = props.storeFactory;
    const [data, setData] = useState<any>(null);
    const formRef = useRef<any>(null);
    const idKey = props.idKey || 'id';

    const getEndPoint = (endPoint: IEndPoint, idProperty: string): IEndPoint => {
        if (typeof endPoint == 'string') {
            return endPoint + '/{' + idProperty + '}';
        } else {
            return endPoint;
        }
    }

    useEffect(() => {
        const id = props.id;
        const idProperty = idKey;
        var endPoint = getEndPoint(props.endPoint, idProperty);
        const formStore = storeFactory.getFormStore({}, endPoint, idProperty);
        var request: GetRequest = {
            options: {
                [idProperty]: id
            }
        };
        formStore.get(request).then(d => { setData(d) });
    }, [props.id])
    
    const saveData = (): any => {
        if (formRef && formRef.current) {
            const idProperty = props.idKey;
            var endPoint = props.endPoint
            const formStore = storeFactory.getFormStore({}, endPoint, idProperty);
            const data = formRef.current.getData();
            formStore.post(data).then((d) => {
                setData(d);
            });
        }
    }

    return { data, saveData, formRef };
}


export { usePalmyraEditForm }
export type { IPalmyraEditFormInput, IPalmyraEditFormOutput }