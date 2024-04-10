import { PalmyraAbstractStore } from './AbstractStore';
import { strings } from '../../form/interface';
import { IEndPoint } from '../../layout/Types';
import { QueryRequest, ChartStore, APIErrorHandlerFactory } from '../../../main';

declare class PalmyraChartStore extends PalmyraAbstractStore implements ChartStore<any> {
    idProperty: strings;
    constructor(request: Record<string, string>, endPoint: IEndPoint, factory: APIErrorHandlerFactory, idProperty?: strings);
    getEndPoint(): IEndPoint;
    queryUrl(): string;
    getUrl(): string;
    query(request: QueryRequest): Promise<any>;
}
export { PalmyraChartStore };
