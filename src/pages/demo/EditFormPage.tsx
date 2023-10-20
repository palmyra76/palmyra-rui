import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { FlexiLayoutRenderer } from '../../../lib/main';


const EditFormPage = () => {
    const { layout } = useParams();
    const [pageDef, setPageDef] = useState(null);
    const [data, setData] = useState({})

    const key = '/' + layout + '/';

    useEffect(() => {
        fetch(key + '/editForm.json')
            .then((response) => response.json())
            .then((d) => setPageDef(d));

        fetch(key + '/formData.json')
            .then((response) => response.json())
            .then((d) => setData(d));
    }, [layout])

    const onValidChange = (valid: boolean) => {
        console.log(valid);
    }

    return <>
        <div> {layout} Edit Form</div>
        {pageDef ? <FlexiLayoutRenderer layout={pageDef}
            data={data}
            callbacks={{ onFormValidChange: onValidChange }}
        ></FlexiLayoutRenderer> : <div />}
    </>
}

export default EditFormPage;