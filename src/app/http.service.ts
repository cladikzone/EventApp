import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { CookieService } from 'angular2-cookie/core';
import { CN, API } from './constants';

@Injectable()
export class HttpClient {

    constructor(private http:Http, private cookieService:CookieService) { }

    addBaseUrl(url: string){
        console.log(API.BASE_URL);
        return API.BASE_URL + url;
    };

    createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', 'Bearer ' + this.cookieService.get(CN.TOKEN)); 
    };

    get(url: string, isAuth:Boolean){
        let headers = new Headers();
        if(isAuth){
            this.createAuthorizationHeader(headers);
        };
        return this.http.get(this.addBaseUrl(url), {
            headers: headers
        });
    };

    post(url: string, data: any, isAuth:Boolean){
        let headers = new Headers();
        if(isAuth){
            this.createAuthorizationHeader(headers);
        };
        return this.http.post(this.addBaseUrl(url), data, {
            headers: headers
        });
    };
}