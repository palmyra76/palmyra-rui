import { MuiServerLookup } from "../../../lib/main";
import FormX from "../wire/FormX";


const BasicSetup = `<MuiServerLookup
    attribute="serverLookup"
    label="ServerLookup"
    lookupOptions={{ displayAttribute: 'name', idAttribute: 'id' }}
    storeOptions={{ endPoint: "/multiServerlookupData.json" }}
/>
`;

const BasicServerLookup = () => {
    return (
        <FormX>
            <MuiServerLookup
                attribute="serverLookup"
                label="Server Lookup"
                lookupOptions={{ displayAttribute: 'name', idAttribute: 'id' }}
                storeOptions={{ endPoint: "/multiServerlookupData.json" }}
            />
        </FormX>
    )
}


export {
    BasicSetup, BasicServerLookup
}