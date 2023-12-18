/// <reference types="react" />
import { strings } from "../form/interface";
type measure = string | number;
interface Positionable {
    height?: measure;
    width?: measure;
}
interface chartOptions {
    backgroundColor: string;
    borderColor: string;
}
interface transformOptions {
    sourceType: string;
    xKey?: strings;
    yKey?: strings;
    rKey?: string;
    xLabel?: string;
    yLabel?: strings;
    chart?: Record<string, chartOptions>;
}
interface transformable {
    transformOptions?: transformOptions;
}
interface Titleable {
    name?: string;
    title?: string;
    hideTitle?: boolean;
}
interface Renderable {
    Container?: React.FC;
    Renderer?: React.FC;
}
interface ActionOptions {
    onClick?: PublishAction;
    newRecord?: PublishAction;
}
interface PublishAction {
    topic: string;
    messageFormat?: string;
}
interface Actionable {
    actionOptions?: ActionOptions;
}
interface MultiEndPoint {
    query: string;
    get: string;
    post?: string;
    put: string;
    delete?: string;
}
type IEndPoint = string | MultiEndPoint;
type IEndPointOptions = Record<string, any>;
interface storeBacked {
    storeOptions?: {
        endPoint?: IEndPoint;
        endPointOptions?: IEndPointOptions;
        hasLayout?: boolean;
    };
}
export type { Positionable, Titleable, Renderable, storeBacked, transformable, transformOptions };
export type { ActionOptions, Actionable, PublishAction, IEndPoint, IEndPointOptions };
