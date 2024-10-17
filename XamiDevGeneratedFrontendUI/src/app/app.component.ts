import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    name = 'Angular';
    inputAccessToken = '';
    accessToken: string = null;
    accessTokenFormControl = new FormControl('', [Validators.required]);

    ngOnInit(): void {
    this.accessToken = JSON.parse(localStorage.getItem('access_token'));
    console.log(this.isMissingAccessToken());
    console.log(this.accessToken);
    }

    isMissingAccessToken(): boolean {
    return this.accessToken === null;
    }

    saveAccessToken() {
    if (this.accessTokenFormControl.hasError('required')) {
        return;
    }
    localStorage.setItem('access_token', `{"access_token": "${this.accessTokenFormControl.value}"}`);
    location.reload();
    }
}