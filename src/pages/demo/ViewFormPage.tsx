import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { FlexiLayoutRenderer } from '../../../lib/main';


const ViewFormPage = () => {
    const params = useParams();
    const [pageDef, setPageDef] = useState(null);
    const [data, setData] = useState({})

    useEffect(() => {
        fetch('/layout/viewForm.json')
            .then((response) => response.json())
            .then((d) => setPageDef(d));

            fetch('/layout/userData.json')
            .then((response) => response.json())
            .then((d) => setData(d));

    }, [params])

    const onValidChange = (valid: boolean) => {
        console.log(valid);
    }

    return <>
        <div> {params.pageName} View Form</div>
        {pageDef ? <FlexiLayoutRenderer layout={pageDef}
            data={data}
            callbacks={{ onFormValidChange: onValidChange }}
        ></FlexiLayoutRenderer> : <div />}
    </>
}

export default ViewFormPage;