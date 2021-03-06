import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from '../events/events-list/events-list.component';
import { EventDetailsComponent } from '../events/event-details/event-details/event-details.component';
import { CreateEventComponent } from '../events/create-event/create-event.component';
import { Error404Component } from '../Error/error404.component';
import { EventRouteActivatorService } from '../events/event-details/event-route-activator.service';
import { EventsListResolverService } from '../events/events-list-resolver.service';

export const routes: Routes = [
  {
    path: '404',
    component: Error404Component,
  },
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate:['canDeactivateCreateEvent']
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve:{events:EventsListResolverService}
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate:[EventRouteActivatorService]

  },
  {
    path: '',
    redirectTo: '/events', pathMatch: 'full'
  },
  {
    path:'user' , loadChildren:'../user/user.module#UserModule'
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
]

})
export class AppRoutingModule { }
