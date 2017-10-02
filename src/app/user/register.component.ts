import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { AuthService } from './../services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})

export class RegisterComponent {

    user: any = {
        name: '',
        email: '',
        password: ''
    };
    create_user: string = 'Salvar';

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    save(e, frm:FormControl) {
        e.preventDefault();

        this.create_user = 'Salvando...';

        this.authService.builder()
            .register(this.user)
            .then(() => {
                this.create_user = 'Salvar';
                window.Materialize.toast('Usuário salvo com sucesso, agora você pode visualizar todos os estabelecimentos cadastrados!', 3000);
                frm.reset();
                this.router.navigate(['/login']);
            });
    }
}
