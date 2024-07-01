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

const MultiServerLookupSetup = `<MuiServerLookup
    attribute="country"
    displayAttribute="country.name"
    label="Select Country"
    multiple
    lookupOptions={{ idAttribute: "id", displayAttribute: "name" }}
    storeOptions={{ endPoint: "/serverlookupData.json" }}
/>
`;

const MultiServerLookup = () => {
    return (
        <FormX>
            <MuiServerLookup attribute="country"
                displayAttribute="country.name"
                label="Select Country"
                multiple
                lookupOptions={{ idAttribute: "id", displayAttribute: "name" }}
                storeOptions={{ endPoint: "/serverlookupData.json" }}
            />
        </FormX>
    )
}

export {
    BasicSetup, BasicServerLookup, MultiServerLookupSetup, MultiServerLookup
}