import { PalmyraStoreFactory, StoreFactory } from "palmyra-wire";

const AppStoreFactory: StoreFactory<any> = new PalmyraStoreFactory({ baseUrl: '/api' });

export default AppStoreFactory;