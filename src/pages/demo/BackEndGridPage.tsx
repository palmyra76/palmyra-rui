import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";

import { FlexiLayoutDefinition, FlexiLayoutRenderer, StoreFactory, StringFormat, topic } from '../../../lib/main';
import { PalmyraStoreFactory } from '../../../lib/palmyra/store/palmyra/PalmyraStoreFactory';

const BackEndGridPage = () => {
    const { layout } = useParams();
    const [pageDef, setPageDef] = useState(null);
    const key = '/' + layout + '/';
    const storeFactory: StoreFactory<any> = new PalmyraStoreFactory({ baseUrl: '/api/palmyra' });
    const navigate = useNavigate();

    useEffect(() => {
        fetch(key + '/sampleGridDef.json')
            .then((response) => response.json())
            .then((d) => { setPageDef(enhance(d)) });
    }, [layout])

    useEffect(() => {
        const idKey: any = pageDef?.idProperty || "id";
        var handle = topic.subscribe("viewPage", (topic, data) => {
            data.id = data[idKey];
            navigate(StringFormat('view/{id}', data));
        });
        return () => {
            topic.unsubscribe(handle);
        }
    }, [pageDef])

    return <>
        <div> Grid Layout Demo </div>
        {pageDef ? <FlexiLayoutRenderer layout={pageDef}
            layoutParams={{}}
            storeFactory={storeFactory} /> : <div />}
    </>
}

export default BackEndGridPage;

function enhance(pageDef: FlexiLayoutDefinition): FlexiLayoutDefinition {
    if (pageDef) {
        const result = pageDef;
        const tableLayout = result.tabs[0]?.sections[0]?.tableLayout;
        if (tableLayout) {
            tableLayout.actionOptions = {
                onClick: {
                    topic: "viewPage"
                }
            }
        }
        return result;
    }
    return pageDef;
}
