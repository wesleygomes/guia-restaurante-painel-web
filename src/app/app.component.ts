import { Component } from '@angular/core';
import * as jQuery from 'jquery';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  user = null;

  constructor(protected authService: AuthService) { }

  ngOnInit() {
    jQuery("#showMenu").sideNav({
      closeOnClick: true,
      draggable: true,
      edge: 'left',
    });

    this.authService.eventEmitter.subscribe(() => {
      this.getUserData();
    });

  }

  protected getUserData() {
    this.authService.getUser()
      .then((res) => {
        this.user = res;
        if (res.status === 401) {
          this.user = null;
        }
      }).catch((err) => {
        this.user = null;
      });
  }
}
