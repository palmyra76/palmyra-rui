import { PalmyraStoreFactory, ServerCardLayout, StoreFactory } from "../../../lib/main";

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
        <ServerCardLayout Child={card} store={store} EmptyChild={card}
            pageSize={[15, 30]}></ServerCardLayout>
    </div></>
}

export default CardPage;