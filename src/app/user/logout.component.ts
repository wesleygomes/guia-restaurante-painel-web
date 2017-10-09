import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Component({
    selector: 'app-logout',
    template: '',
})

export class LogoutComponent implements OnInit {

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
        this.authService.builder().logout()
            .then(() => {
                document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:01 GMT";
                this.router.navigate(['/login']);
            });
    }
}
