import { ITitle } from '../form/interface';

type measure = string | number;
interface Positionable {
    height?: measure;
    width?: measure;
}
interface Titleable {
    name?: string;
    title?: ITitle;
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
export type { Positionable, Titleable, Renderable, storeBacked };
export type { ActionOptions, Actionable, PublishAction, IEndPoint, IEndPointOptions };
