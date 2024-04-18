import { ITitle } from '../form/interface';
import { IEndPoint, IEndPointOptions } from 'palmyra-wire';

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
interface storeBacked {
    storeOptions?: {
        endPoint?: IEndPoint;
        endPointOptions?: IEndPointOptions;
        hasLayout?: boolean;
    };
}
export type { Positionable, Titleable, Renderable, storeBacked };
export type { ActionOptions, Actionable, PublishAction, IEndPoint, IEndPointOptions };
