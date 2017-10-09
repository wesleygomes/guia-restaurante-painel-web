import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import * as jQuery from 'jquery';

import { AuthService } from './../../services/auth.service';
import { AppHttpService } from './../../services/app-http.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurant-describe.component.html'
})
export class RestaurantDescribeComponent {
  id: number;
  restaurant: any = {};
  user: any = {};
  photos: any = [];
  dishes: any = { data: [] };
  viewPhone: boolean = false;
  vote: any = { points: '', comment: '' };

  constructor(
    private route: ActivatedRoute,
    protected authService: AuthService,
    private appHttpService: AppHttpService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = this.id = params['id'];
      let options = {
        filter: {
          restaurant_id: id
        }
      }

      

      this.authService.getUser()
        .then((res) => {
          this.user = res;
        });

      this.appHttpService.builder('restaurants')
        .view(id)
        .then(res => this.restaurant = res);

      this.appHttpService.builder('dishes')
        .list(options)
        .then(res => this.dishes = res);

      this.appHttpService.builder('restaurants/' + id + '/photos')
        .list()
        .then(res => {
          this.photos = res
          setTimeout(() => {
            jQuery('.materialboxed').materialbox();
          })
        });
    });
  }

  showPhone(e) {
    e.preventDefault();
    if (!this.viewPhone) {
      this.appHttpService.builder('restaurants/' + this.id + '/view-phone').list();
    }
    this.viewPhone = true;
  }

  addVote(e, vote) {
    e.preventDefault();

    jQuery('.modal').modal();
    jQuery('.modal').modal('open');
    this.vote.points = vote || '';
  }

  sendVote(e) {
    e.preventDefault();

    jQuery('.modal').modal('close');
    this.vote.restaurant_id = this.id;
    this.vote.user_id = this.user.id;
    this.appHttpService.builder('restaurants/vote')
      .insert(this.vote)
      .then(() => {
        this.vote = { points: '', comment: '' };
      });
  }

  classToVotes(vote) {
    if (this.restaurant.points >= vote) {
      return 'amber-text';
    }
    return 'black-text';
  }
}