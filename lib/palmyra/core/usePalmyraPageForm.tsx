
import { useEffect, useRef, useState } from "react";
import { IEndPoint } from "../layout/Types";
import { GetRequest } from "../store/Types";
import { StoreFactory } from "../../main";

interface IPalmyraFormInput {
    storeFactory:StoreFactory<any>,
    pageName: string,
    id: string,
    endPoint: IEndPoint,
    idKey?: string
}

const usePalmyraPageForm = (props: IPalmyraFormInput) => {
    const storeFactory = props.storeFactory;
    const [data, setData] = useState<any>(null);
    const formRef = useRef<any>(null);
    const idKey = props.idKey || 'id';

    useEffect(() => {
        const id = props.id;
        const idProperty = idKey;
        var endPoint = props.endPoint + '/{' + idProperty + '}';
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


export { usePalmyraPageForm }
export type { IPalmyraFormInput }