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
    xKey?: string,
    yKey?: strings,
    rKey?: string,
    xLabel?: string,
    yLabel?: strings,
    chart: Record<string, chartOptions>
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

interface storeBacked {
    storeOptions?: {
        // alias for Query, if put,post, delete specific urls not provided, 
        // this attribute will be considered
        urlFormat?: string,
        urlFormatPut?: string,
        urlFormatPost?: string,
        urlFormatDelete?: string
    }
}


export type { Positionable, Titleable, Renderable, storeBacked, transformable, transformOptions };