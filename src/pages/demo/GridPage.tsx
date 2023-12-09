import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { FlexiLayoutRenderer, PalmyraGrid, TableLayout } from '../../../lib/main';
import { AppStoreFactory } from '../../components/store/AppStoreFactory';
import './GridPage.css'

const GridPage = () => {
    const { layout } = useParams();
    const [pageDef, setPageDef] = useState(null);
    const key = '/' + layout + '/';
    const storeFactory: AppStoreFactory = new AppStoreFactory();

    useEffect(() => {
        fetch(key + '/gridDef.json')
            .then((response) => response.json())
            .then((d) => { setPageDef(d) });
    }, [layout])


    const tableLayout: TableLayout = pageDef ? pageDef.tabs[0].sections[0].tableLayout : {};

    return <>
        <div className='grid-renderer-container'>
            {pageDef ? <PalmyraGrid
                columns={tableLayout.fields}
                endPoint={tableLayout.storeOptions.endPoint}
                actions={tableLayout.actionOptions}
                quickSearch={tableLayout.quickSearch}
                layoutParams={{}}
                pagination={[5, 10, 25]}
                storeFactory={storeFactory} /> : <div />}
        </div>
    </>
}

export default GridPage;