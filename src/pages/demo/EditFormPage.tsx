import { useEffect, useRef, useState } from 'react';
import { useParams } from "react-router-dom";

import { FlexiLayoutRenderer } from '../../../lib/main';
import { AppStoreFactory } from '../../components/store/AppStoreFactory';

const EditFormPage = () => {
    const { layout } = useParams();
    const [pageDef, setPageDef] = useState(null);
    const [data, setData] = useState({})
    const storeFactory: AppStoreFactory = new AppStoreFactory();
    const key = '/' + layout + '/';
    const formRef = useRef<any>(null);

    useEffect(() => {
        setData({});
        fetch(key + '/editForm.json')
            .then((response) => response.json())
            .then((d) => setPageDef(d));
    }, [layout])

    useEffect(() => {
        console.log('updating data', data);
    }, [data])


    useEffect(() => {
        setTimeout(() => {
            fetch(key + '/userData.json')
                .then((response) => response.json())
                .then((d) => {
                    setData(d);
                });
        }, 2000);
    }, [pageDef])


    const onValidChange = (valid: boolean) => {
        if (formRef) {
            console.log("validity changed to " + valid, formRef.current.getData());
        }
    }

    return <>
        <div> {layout} Edit Form</div>
        {pageDef ? <FlexiLayoutRenderer layout={pageDef}
            layoutParams={{}} ref={formRef}
            data={data} storeFactory={storeFactory}
            callbacks={{ onFormValidChange: onValidChange }}
        ></FlexiLayoutRenderer> : <div />}
    </>
}

export default EditFormPage;