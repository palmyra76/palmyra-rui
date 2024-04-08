import { PalmyraAbstractStore } from './AbstractStore';
import { strings } from '../../form/interface';
import { IEndPoint } from '../../layout/Types';
import { AxiosInstance } from 'axios';
import { GetRequest, QueryRequest, QueryResponse, GridStore, ExportRequest } from '../../../../lib/main';

declare class PalmyraGridStore extends PalmyraAbstractStore implements GridStore<any> {
    idProperty: strings;
    constructor(options: Record<string, any>, endPoint: IEndPoint, idProperty?: strings);
    getClient(): AxiosInstance;
    getEndPoint(): IEndPoint;
    queryUrl(): string;
    getUrl(): string;
    query(request: QueryRequest): Promise<QueryResponse<any>>;
    export(request: ExportRequest): void;
    queryLayout(request: QueryRequest): Promise<any>;
    get(request: GetRequest, idProperty?: string): Promise<any>;
    getIdentity(o: any): void;
    getIdProperty(): string;
}
export { PalmyraGridStore };
