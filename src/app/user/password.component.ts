import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../services/auth.service';

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html'
})

export class PasswordComponent {

    user: any = {
        password: null,
        password_confirmation: null
    };

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    save(e) {
        e.preventDefault();

        if (this.user.password && this.user.password === this.user.password_confirmation) {
            this.authService.builder().changePassword(this.user)
                .then(() => {
                    window.Materialize.toast('Salvo com sucesso', 3000);
                })
                .then(() => {
                    this.router.navigate(['/dashboard']);
                })

        } else {
            window.Materialize.toast('Verifique a senha', 3000, 'red');
        }
    }
}
