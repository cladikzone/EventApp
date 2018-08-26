import { Injectable } from '@angular/core';
import { HttpClient } from '../../app/http.service';
import { Branch } from '../../models/branch';
import { RegisterModel } from '../../models/register';
import { User } from '../../models/user';
import * as _ from 'underscore';

import { API } from '../../app/constants';

@Injectable()
export class WelcomeService {
    private branches: Array<Branch> = [];
    private register: RegisterModel = new RegisterModel();

    constructor(private http:HttpClient) { }

    getBranches(url: string){
        return this.http.get(API.BASE_URL + url, false).map(res => res.json());
    }

    getNearestBranches(url: string){
        return this.http.get(API.BASE_URL + url, false).map(res => res.json());
    }

    addBranches(selectedBranches: Array<Branch>){
        this.register.branches = selectedBranches;
    }

    addUserInfo(user: User){
        this.register.email = user.email;
        this.register.mobile = user.mobile;
        this.register.notifyDates = user.notifyDates;
    }

    registerUser(url: string, registerModel: RegisterModel){
        return this.http.post(API.BASE_URL + url, registerModel, false).map(res => res.json());
    }

    getRegisterObj(): RegisterModel{
        console.log(this.register.branches);
        this.register.branches = _.map(this.register.branches, (branch) => {
            if(_.isObject(branch)){
                return branch._id;
            }
            return branch;
        });
        return this.register;
    }
}