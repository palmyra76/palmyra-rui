
interface Positionable {
    height?: number,
    width?: number
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
        urlFormatDelete?: string,
        idAttribute?: string,
        searchAttribute?: string,
        titleAttribute?: string
    }
}


export type { Positionable, Titleable, Renderable, storeBacked };