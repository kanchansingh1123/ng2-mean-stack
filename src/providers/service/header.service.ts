import { Headers } from "@angular/http"
import { Injectable } from "@angular/core";

@Injectable()
export class ApiHeaders {
    constructor() {

    }

    getHeader() : {headers: Headers} {
        const headers = new Headers();
        //headers.append('Content-Type', 'application/json; charset=utf-8');
        // headers.append('Access-Control-Allow-Origin', '*');
        //headers.append('Access-Control-Allow-Methods', '[GET, POST, OPTIONS, PUT, PATCH, DELETE]');
        let tempHeader: any;
        tempHeader = headers;
        return {headers: tempHeader};
    }
}