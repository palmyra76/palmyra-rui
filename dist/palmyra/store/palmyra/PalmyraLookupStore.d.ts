import { PalmyraAbstractStore } from './AbstractStore';
import { strings } from '../../form/interface';
import { IEndPoint } from '../../layout/Types';
import { QueryRequest, QueryResponse, LookupStore } from '../../../main';

declare class PalmyraLookupStore extends PalmyraAbstractStore implements LookupStore<any> {
    idProperty: strings;
    constructor(options: Record<string, any>, endPoint: IEndPoint, idProperty?: strings);
    getEndPoint(): IEndPoint;
    queryUrl(): string;
    getUrl(): string;
    query(request: QueryRequest): Promise<QueryResponse<any>>;
}
export { PalmyraLookupStore };
