import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../services/auth.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {

    user: Object = {};

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.authService.getUser().then((res) => {
            this.user = res;
            window.Materialize.updateTextFields();
        });
    }

    save(e) {
        e.preventDefault();

        this.authService.builder().editProfile(this.user)
            .then(() => {
                window.Materialize.toast('Salvo com sucesso', 3000);
            })
            .then(() => {
                this.router.navigate(['/dashboard']);
            })
    }
}
