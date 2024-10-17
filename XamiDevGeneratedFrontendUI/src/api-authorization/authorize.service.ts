import { Inject, Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthorizeService {
    private accessToken: any = null;

    constructor() {
        this.accessToken = JSON.parse(localStorage.getItem('access_token'));
    }

    isLoggedIn(): boolean {
        //return this.user != null && !this.user.expired;
        return true;
    }

    getAccessToken(): Observable<string> {
        //return of(this.user.access_token);
        // const accessToken = JSON.parse(localStorage.getItem('access_token'));
        // console.log(accessToken);
        return of(this.accessToken.access_token);
    }
}