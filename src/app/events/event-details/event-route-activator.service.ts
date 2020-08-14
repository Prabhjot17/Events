import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,Router } from '@angular/router';
import { EventserviceService } from '../Shared/eventservice.service';


@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate {

  constructor(private eventService: EventserviceService, private router: Router) 
  { 

  }

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExist = !!this.eventService.getEvent(+route.params['id']);
      if (!eventExist)
      this.router.navigate(['/404']);

      return eventExist;
  }
 

}
