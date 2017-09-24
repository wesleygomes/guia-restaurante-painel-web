import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RestaurantComponent } from './components/restaurant.component';
import { RestaurantDescribeComponent } from "./components/restaurant-describe.component";

const appRoutes: Routes = [
    { path: 'search', component: RestaurantComponent },
    { path: 'restaurant/:id', component: RestaurantDescribeComponent },
];

@NgModule({
    declarations: [
        RestaurantComponent,
        RestaurantDescribeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: []
})

export class RestaurantsModule { }