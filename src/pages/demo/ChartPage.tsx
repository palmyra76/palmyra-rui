import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { FlexiLayoutRenderer } from '../../../lib/main';
import { AppStoreFactory } from '../../components/store/AppStoreFactory';

// for object data
const ChartPage = () => {
    const { layout } = useParams();
    const [pageDef, setPageDef] = useState(null);
    const key = '/' + layout + '/';
    const storeFactory: AppStoreFactory = new AppStoreFactory();

    useEffect(() => {
        fetch(key + 'chartObject.json')
            .then((response) => response.json())
            .then((d) => setPageDef(d));
    }, [layout])

    return <>
        <div> Chart Layout Demo(Object) </div>
        {pageDef ? <FlexiLayoutRenderer layout={pageDef} storeFactory={storeFactory} /> : <div />}
    </>
}

export default ChartPage;