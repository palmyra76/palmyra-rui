import { DataStore, QueryOptions, StringFormat } from "../../../main";
import { IEndPoint } from "../../layout/Types";
import { PalmyraGridStore } from "./PalmyraGridStore";

class PalmyraDataStore<T> extends PalmyraGridStore implements DataStore<T>{
    constructor(request: Record<string, string>, endPoint: IEndPoint, idProperty?: string) {
        super(request, endPoint, idProperty);
    }

    post(data: any, options?: QueryOptions): Promise<T> {
        var urlFormat = this.target + this.postUrl();
        var url: any = StringFormat(urlFormat, options);
        return this.getClient().post(url, data)
            .then(response => { return response.data });
    }

    put(data: any, options?: QueryOptions, idProperty?: string): Promise<T> {
        var urlFormat = this.target + this.putUrl();
        var url: any = StringFormat(urlFormat, options);
        return this.getClient().put(url, data)
            .then(response => { return response.data });
    }

    remove(key: any, idProperty?: string): Promise<T> {
        var urlFormat = this.target + this.deleteUrl();
        var url: any = StringFormat(urlFormat, key);
        return this.getClient().delete(url)
            .then(response => { return response.data });
    }

    postUrl(): string {
        const ep: IEndPoint = this.getEndPoint();
        if (typeof ep == 'string') {
            return ep;
        } else {
            return ep.post ? ep.post : ep.get;
        }
    }

    putUrl(): string {
        const ep: IEndPoint = this.getEndPoint();
        if (typeof ep == 'string') {
            return ep;
        } else {
            return ep.put;
        }
    }

    deleteUrl(): string {
        const ep: IEndPoint = this.getEndPoint();
        if (typeof ep == 'string') {
            return ep;
        } else {
            return ep.delete ? ep.delete : ep.put;
        }
    }
}

export { PalmyraDataStore };
