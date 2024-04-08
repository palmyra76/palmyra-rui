import { PalmyraAbstractStore } from './AbstractStore';
import { strings } from '../../form/interface';
import { IEndPoint } from '../../layout/Types';
import { AxiosInstance } from 'axios';
import { QueryRequest, QueryResponse, TreeQueryStore } from '../../../main';

interface IChildTreeRequest {
    parent?: number;
}
declare class PalmyraTreeStore extends PalmyraAbstractStore implements TreeQueryStore<IChildTreeRequest, any> {
    idProperty: strings;
    constructor(options: Record<string, any>, endPoint: IEndPoint, idProperty?: strings);
    getChildren(data: IChildTreeRequest): Promise<QueryResponse<any>>;
    getRoot(): Promise<any>;
    getClient(): AxiosInstance;
    getEndPoint(): IEndPoint;
    queryUrl(): string;
    query(request: QueryRequest): Promise<QueryResponse<any>>;
}
export { PalmyraTreeStore };
export type { IChildTreeRequest };
