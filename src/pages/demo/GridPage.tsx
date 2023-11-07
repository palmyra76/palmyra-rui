import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { FlexiLayoutRenderer, StoreFactory } from '../../../lib/main';
import { PalmyraStoreFactory } from '../../../lib/palmyra/store/palmyra/PalmyraStoreFactory';

const GridPage = () => {
    const { layout } = useParams();
    const [pageDef, setPageDef] = useState(null);
    const key = '/' + layout + '/';
    const storeFactory: StoreFactory<any> = new PalmyraStoreFactory({ baseUrl: '/api/palmyra' });

    useEffect(() => {
        fetch(key + '/gridDef.json')
            .then((response) => response.json())
            .then((d) => { setPageDef(d) });
    }, [layout])

    return <>
        <div> Grid Layout Demo </div>
        {pageDef ? <FlexiLayoutRenderer layout={pageDef}
            layoutParams={{}}
            storeFactory={storeFactory} /> : <div />}
    </>
}

export default GridPage;