import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { FlexiLayoutRenderer } from '../../../lib/main';


const GridPage = () => {
    const params = useParams();
    const [pageDef, setPageDef] = useState(null);
    
    useEffect(() => {
        fetch('/layout/gridDef.json')
            .then((response) => response.json())
            .then((d) => setPageDef(d));

    }, [params])
  
    return <>
        <div> Grid Layout Demo </div>
        {pageDef ? <FlexiLayoutRenderer layout={pageDef} /> : <div />}
    </>
}

export default GridPage;