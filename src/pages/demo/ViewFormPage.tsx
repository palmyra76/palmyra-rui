import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { FlexiLayoutRenderer } from '../../../lib/main';
import { AppStoreFactory } from '../../components/store/AppStoreFactory';

const ViewFormPage = () => {
    const { layout } = useParams();
    const [pageDef, setPageDef] = useState(null);
    const [data, setData] = useState({});
    const storeFactory: AppStoreFactory = new AppStoreFactory();
    const key = '/' + layout + '/';

    useEffect(() => {
        fetch(key + '/viewForm.json')
            .then((response) => response.json())
            .then((d) => setPageDef(d));

        fetch(key + '/userData.json')
            .then((response) => response.json())
            .then((d) => setData(d));

    }, [layout])

    const onValidChange = (valid: boolean) => {
        console.log(valid);
    }

    return <>
        <div> {layout} View Form</div>
        {pageDef ? <FlexiLayoutRenderer layout={pageDef}
            data={data} storeFactory={storeFactory} layoutParams={{}}
            callbacks={{ onFormValidChange: onValidChange }}
        ></FlexiLayoutRenderer> : <div />}
    </>
}

export default ViewFormPage;