import { PalmyraStoreFactory, ServerCardLayout, StoreFactory } from "../../../lib/main";
// import { Pagination } from '@mui/material';

const card = (props: any) => {
    console.log(props);

    return <>
        <div style={{ border: "1px solid", padding: '10px' }}>Card</div>
    </>
}

const CardPage = () => {
    const storeFactory: StoreFactory<any> = new PalmyraStoreFactory({ baseUrl: '/api/palmyra' });
    const store = storeFactory.getGridStore({}, '/params/definition');
    return <><div className="param-list-servercard-layout">
        <ServerCardLayout Child={card} store={store} EmptyChild={card} children='sss'
            pageSize={[16]}></ServerCardLayout>
    </div></>
}

export default CardPage;