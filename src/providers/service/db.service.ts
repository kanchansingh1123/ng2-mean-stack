import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { ApiHeaders } from './header.service';
import 'rxjs/add/operator/map'


@Injectable()
export class DBService {
    private url: any = 'http://localhost:3000/api/';

    constructor(private http: Http, private header: ApiHeaders) {

    }

    getApiCall(action){
        return this.http.get(`${this.url}${action}`, this.header.getHeader()).map(res=>res.json());
    }

    postApiCall(params, action) {
        return this.http.post(`${this.url}${action}`, params, this.header.getHeader()).map(res=>res.json());
    }

    deleteApiCall(action, id){
        return this.http.get(`${this.url}${action}/${id}`, this.header.getHeader()).map(res=>res.json());
    }
}