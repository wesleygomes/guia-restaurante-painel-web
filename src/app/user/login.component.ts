import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

import { environment } from './../../environments/environment';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        #loginForm {
            margin-top: 50px;    
        }
    `
    ]
})

export class LoginComponent {

    user: any = {
        username: null,
        password: null,
    };

    acessar: string = 'Acessar';

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    login(e) {
        e.preventDefault();

        this.acessar = 'Validando....';
        if (!this.user.username || !this.user.password) {
            window.Materialize.toast('Preencha o formulário', 3000, 'red');
            return;
        }

        let data = {
            grant_type: 'password',
            client_id: environment.client_id,
            client_secret: environment.client_secret,
            username: this.user.username,
            password: this.user.password,
            scope: ''
        };

        this.authService.login(data).then((res) => {
            this.acessar = 'Acessar';
            document.cookie = "token=" + res.access_token + "; expires=" + res.expires_in;
            this.authService.setAccessToken();
            this.router.navigate(['/search']);
        });
    }

}
