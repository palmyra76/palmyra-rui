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
interface storeBacked {
    storeOptions?: {
        endPoint?: string;
        hasLayout?: boolean;
        urlFormat?: string;
        urlFormatPut?: string;
        urlFormatPost?: string;
        urlFormatDelete?: string;
    };
}
export type { Positionable, Titleable, Renderable, storeBacked, transformable, transformOptions };
export type { ActionOptions, Actionable, PublishAction };
