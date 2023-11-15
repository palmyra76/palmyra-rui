type measure = string | number;

type strings = string | string[];
// type numbers = number | number[];

interface Positionable {
    height?: measure,
    width?: measure
}

interface chartOptions {
    backgroundColor: string,
    borderColor: string
}

interface transformOptions {
    sourceType: string,
    xKey?: strings,
    yKey?: strings,
    rKey?: string,
    xLabel?: string,
    yLabel?: strings,
    chart?: Record<string, chartOptions>
}

interface transformable {
    transformOptions?: transformOptions;
}

interface Titleable {
    name?: string,
    title?: string,
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

interface MultiEndPoint {
    query: string,
    get: string,
    post?: string,
    put: string,
    delete?: string
}

type IEndPoint = string | MultiEndPoint;

interface storeBacked {
    storeOptions?: {
        endPoint?: IEndPoint// alias for Query, if put,post, delete specific urls not provided,
        hasLayout?: boolean
    }
}


export type { Positionable, Titleable, Renderable, storeBacked, transformable, transformOptions };

export type { ActionOptions, Actionable, PublishAction, IEndPoint }