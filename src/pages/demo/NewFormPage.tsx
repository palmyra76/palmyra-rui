import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { FlexiLayoutRenderer } from '../../../lib/main';


const NewFormPage = () => {
    const params = useParams();
    const [pageDef, setPageDef] = useState(null);

    useEffect(() => {
        fetch('/layout/editForm.json')
            .then((response) => response.json())
            .then((d) => setPageDef(d));
    }, [params])

    const onValidChange = (valid: boolean) => {
        console.log(valid);
    }

    return <>
        <div> {params.pageName} New Form</div>
        {pageDef ? <FlexiLayoutRenderer layout={pageDef}
            callbacks={{ onFormValidChange: onValidChange }}
        ></FlexiLayoutRenderer> : <div />}
    </>
}

export default NewFormPage;