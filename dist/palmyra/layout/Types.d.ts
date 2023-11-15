/// <reference types="react" />
type measure = string | number;
type strings = string | string[];
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
interface storeBacked {
    storeOptions?: {
        endPoint?: IEndPoint;
        hasLayout?: boolean;
    };
}
export type { Positionable, Titleable, Renderable, storeBacked, transformable, transformOptions };
export type { ActionOptions, Actionable, PublishAction, IEndPoint };
