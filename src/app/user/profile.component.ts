import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { AuthService } from './../services/auth.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {

    user: Object = {};
    update_profile: string = 'Salvar';

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.authService
            .getUser()
            .then((res) => {
                this.user = res;
                window.Materialize.updateTextFields();
            });
    }

    save(e) {
        e.preventDefault();

        this.update_profile = 'Salvando...';

        this.authService.builder()
            .editProfile(this.user)
            .then(() => {
                this.update_profile = 'Salvar';
                window.Materialize.toast('Dados atualizado com sucesso', 3000);
                this.router.navigate(['/dashboard']);
            });
    }
}
