import { IEndPoint, AbstractRequest } from '../../../main';

declare class PalmyraAbstractStore {
    options: Record<string, any>;
    target: string;
    endPoint: IEndPoint;
    constructor(options: Record<string, any>, endPoint: IEndPoint);
    getEndPoint(): IEndPoint;
    getOptions(): Record<string, any>;
    getTarget(): string;
    formatUrl(urlFormat: string, request: AbstractRequest): string;
    isUrlValid(url: string): any;
}
export { PalmyraAbstractStore };
