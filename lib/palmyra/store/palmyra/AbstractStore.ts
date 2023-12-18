import { StringFormat, IEndPoint, AbstractRequest } from "../../../main";

class PalmyraAbstractStore {
    options: Record<string, any>
    target: string
    endPoint: IEndPoint

    constructor(options: Record<string, any>, endPoint: IEndPoint) {
        this.options = options;
        this.target = options.target;
        this.endPoint = endPoint;
    }

    getEndPoint(): IEndPoint {
        return this.endPoint;
    }

    getOptions(): Record<string, any> {
        return this.options;
    }

    getTarget(): string {
        return this.target;
    }

    formatUrl(urlFormat: string, request: AbstractRequest): string {
        if(request)
            return StringFormat(StringFormat(urlFormat, request.options), request.endPointVars);
        else
            return urlFormat;
    }
}

export { PalmyraAbstractStore };
