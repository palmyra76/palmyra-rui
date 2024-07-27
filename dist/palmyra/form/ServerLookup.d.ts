import { FieldProperties } from './Types';
import { QueryStore } from '@palmyralabs/palmyra-wire';

interface LookupFieldProperties extends FieldProperties {
    store: QueryStore<any>;
}
declare const ServerLookup: import('react').ForwardRefExoticComponent<LookupFieldProperties & import('react').RefAttributes<unknown>>;
export default ServerLookup;
