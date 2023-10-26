import { useEffect, useRef, useState } from 'react';
import { useParams } from "react-router-dom";

import { FlexiLayoutRenderer } from '../../../lib/main';
import { AppStoreFactory } from '../../components/store/AppStoreFactory';

const NewFormPage = () => {
    const { layout } = useParams();
    const formRef = useRef(null);
    const [pageDef, setPageDef] = useState(null);
    const storeFactory: AppStoreFactory = new AppStoreFactory();
    const key = '/' + layout + '/';

    useEffect(() => {
        fetch(key + '/editForm.json')
            .then((response) => response.json())
            .then((d) => setPageDef(d));
    }, [layout])

    const onValidChange = (valid: boolean) => {
        if(formRef)
            console.log(formRef.current.getData());
        console.log(valid);
    }

    return <>
        <div> {layout} New Form</div>
        {pageDef ? <FlexiLayoutRenderer ref={formRef}
            layoutParams={{}}
            layout={pageDef} storeFactory={storeFactory}
            callbacks={{ onFormValidChange: onValidChange }}
        ></FlexiLayoutRenderer> : <div />}
    </>
}

export default NewFormPage;