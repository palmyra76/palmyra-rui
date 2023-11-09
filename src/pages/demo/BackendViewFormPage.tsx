import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { FlexiLayoutRenderer, PalmyraStoreFactory, StoreFactory, DataStore, mergeDeep } from '../../../lib/main';


const BackendViewFormPage = () => {
    const params = useParams();
    const layout = params.layout;
    const [pageDef, setPageDef] = useState(null);
    const [data, setData] = useState({});
    const storeFactory: StoreFactory<any> = new PalmyraStoreFactory({ baseUrl: '/api/palmyra' });
    const key = '/' + layout + '/';

    console.log(layout);

    useEffect(() => {
        fetch(key + '/viewForm.json')
            .then((response) => response.json())
            .then((d) => setPageDef(d));

        // fetch(key + '/userData.json')
        //     .then((response) => response.json())
        //     .then((d) => setData(d));

    }, [layout])


    const fetchData = () => {
        if (pageDef) {
            const dataStore: DataStore<any> = storeFactory.getFormStore(getStoreOptions(params));
            console.log(params);
            dataStore.get({
                key: params.id
            }).then((d) => { console.log(d) });
        }
    }

    useEffect(() => {
        if (pageDef) {
            const dataStore: DataStore<any> = storeFactory.getFormStore(getStoreOptions(params));
            console.log(params);
            dataStore.get({
                key: params.id
            }).then((d) => { console.log(d) });
        }else{
            console.error('pageDef is null');
        }

    }, [pageDef])

    const onValidChange = (valid: boolean) => {
        console.log(valid);
    }

    const getStoreOptions = (layoutParams: any) => {
        const storeOptions = pageDef.storeOptions;
        var storeRequest: any = {};
        mergeDeep(storeRequest, storeOptions, layoutParams);
        return storeRequest;
    }

    return <>
        <div> {layout} asdf023r Form</div>
        {pageDef ? <FlexiLayoutRenderer layout={pageDef}
            data={data} storeFactory={storeFactory} layoutParams={{}}
            callbacks={{ onFormValidChange: onValidChange }}
        ></FlexiLayoutRenderer> : <div />}
    </>
}

export default BackendViewFormPage;