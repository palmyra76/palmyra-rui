import { PalmyraGridStore } from './PalmyraGridStore';
import { IEndPoint } from '../../layout/Types';
import { strings } from '../../form/interface';
import { DataStore, PostRequest, PutRequest, RemoveRequest } from '../../../main';

declare class PalmyraDataStore<T> extends PalmyraGridStore implements DataStore<T> {
    constructor(request: Record<string, string>, endPoint: IEndPoint, idProperty?: strings);
    save(data: any, request?: PostRequest): Promise<T>;
    post(data: any, request?: PostRequest): Promise<T>;
    put(data: any, request?: PutRequest): Promise<T>;
    remove(key: any, request?: RemoveRequest): Promise<T>;
    postUrl(): string;
    putUrl(): string;
    deleteUrl(): string;
}
export { PalmyraDataStore };
