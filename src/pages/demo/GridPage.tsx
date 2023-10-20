import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { FlexiLayoutRenderer } from '../../../lib/main';


const GridPage = () => {
    const { layout } = useParams();
    const [pageDef, setPageDef] = useState(null);
    const key = '/' + layout + '/';

    useEffect(() => {
        fetch(key + 'gridDef.json')
            .then((response) => response.json())
            .then((d) => setPageDef(d));

    }, [layout])

    return <>
        <div> Grid Layout Demo </div>
        {pageDef ? <FlexiLayoutRenderer layout={pageDef} /> : <div />}
    </>
}

export default GridPage;