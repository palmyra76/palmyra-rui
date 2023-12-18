import { QueryRequest, ChartStore } from "../../../main";
import { IEndPoint } from "../../layout/Types";
import { strings } from "../../form/interface";
import { PalmyraAbstractStore } from "./AbstractStore";
declare class PalmyraChartStore extends PalmyraAbstractStore implements ChartStore<any> {
    idProperty: strings;
    constructor(request: Record<string, string>, endPoint: IEndPoint, idProperty?: strings);
    getEndPoint(): IEndPoint;
    queryUrl(): string;
    getUrl(): string;
    query(request: QueryRequest): Promise<any>;
}
export { PalmyraChartStore };
