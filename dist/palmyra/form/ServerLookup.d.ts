import { QueryStore } from 'palmyra-wire';
import { FieldProperties } from './Types';

interface LookupFieldProperties extends FieldProperties {
    store: QueryStore<any>;
}
declare const ServerLookup: import('react').ForwardRefExoticComponent<LookupFieldProperties & import("react").RefAttributes<unknown>>;
export default ServerLookup;
