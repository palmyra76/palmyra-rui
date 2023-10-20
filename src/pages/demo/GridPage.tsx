import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { FlexiLayoutDefinition, FlexiLayoutRenderer } from '../../../lib/main';
import { DummyGridStore } from '../../components/store/DummyGridStore';
import { AppStoreFactory } from '../../components/store/AppStoreFactory';


const GridPage = () => {
    const { layout } = useParams();
    const [pageDef, setPageDef] = useState(null);
    const key = '/' + layout + '/';
    const storeFactory: AppStoreFactory = new AppStoreFactory();

    useEffect(() => {
        fetch(key + 'gridDef.json')
            .then((response) => response.json())
            .then((d) => setPageDef(d));
    }, [layout])

    return <>
        <div> Grid Layout Demo </div>
        {pageDef ? <FlexiLayoutRenderer layout={pageDef} storeFactory={storeFactory} /> : <div />}
    </>
}

export default GridPage;