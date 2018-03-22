import { Headers } from "@angular/http"
import { Injectable } from "@angular/core";

@Injectable()
export class ApiHeaders {
    constructor() {

    }

    getHeader() : {headers: Headers} {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        let tempHeader: any;
        tempHeader = headers;
        return {headers: tempHeader};
    }
}