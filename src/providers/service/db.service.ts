import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { ApiHeaders } from './header.service';
import 'rxjs/add/operator/map'


@Injectable()
export class DBService {
    private url: any = 'http://localhost/3000/';

    constructor(private http: Http, private header: ApiHeaders) {

    }

    getApiCall(){
        return this.http.get(this.url, this.header.getHeader()).map(res=>res.json());
    }
}