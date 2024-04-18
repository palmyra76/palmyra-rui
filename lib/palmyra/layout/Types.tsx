import { IEndPoint, IEndPointOptions } from "palmyra-wire";
import { ITitle } from "../form/interface";

type measure = string | number;

// type numbers = number | number[];

interface Positionable {
    height?: measure,
    width?: measure
}


interface Titleable {
    name?: string,
    title?: ITitle
    hideTitle?: boolean
}

interface Renderable {
    Container?: React.FC, // Current container
    Renderer?: React.FC // Child Renderer
}

interface ActionOptions {
    onClick?: PublishAction,
    newRecord?: PublishAction,
}

interface PublishAction {
    // Topic variable can have variable names and can be replaced
    topic: string,
    // Optional message format, if not provided entire data will be published into the topic
    messageFormat?: string
}

interface Actionable {
    actionOptions?: ActionOptions
}

interface storeBacked {
    storeOptions?: {
        endPoint?: IEndPoint// alias for Query, if put,post, delete specific urls not provided,
        endPointOptions?: IEndPointOptions
        hasLayout?: boolean
    }
}


export type { Positionable, Titleable, Renderable, storeBacked };

export type { ActionOptions, Actionable, PublishAction, IEndPoint, IEndPointOptions }