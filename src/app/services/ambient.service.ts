import { Injectable } from '@angular/core';

@Injectable()
export class AmbientService {

    constructor(){}

    public set user(user){
        sessionStorage.setItem('user_',user);
    }

    public get user(){
        return sessionStorage.getItem('user_');
    }
}